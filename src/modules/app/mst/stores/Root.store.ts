import { applySnapshot, cast, flow, types } from 'mobx-state-tree'
import { Sprints$ } from '@/modules/sprints/mst/stores/Sprints.store'
import { server_getSessionCredentials } from '@/services/server_getSessionCredentials'
import { removeSessionJWTFromCookie, setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'
import { parseJwt } from '@/helpers/parseJwt'
import { getParam_Email } from '@/helpers/urlSearchParams'
import { server_getUserDataByEmail } from '@/modules/auth/activation-pending/service/server_getUserDataByEmail'
import { User$ } from './User.store'
import type { NavigateFunction } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { processError } from '@/helpers/processMessage'
import type { QueryClient } from '@tanstack/react-query'

export const Root$ = types
    .model('Root$', {
        darkTheme: types.optional(types.boolean, true),
        user: types.optional(User$, {}),
        sprints$: types.optional(Sprints$, {}),
    })
    .volatile(() => ({
        initLoading: true,
        userIsLoading: false,
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        toggleTheme() {
            const toggle = !self.darkTheme
            self.darkTheme = toggle
            localStorage.setItem('dark', toggle.toString())
            document.querySelector('html')!.setAttribute('dark', toggle.toString())
        },
    }))
    .actions((self) => ({
        selectUser: flow(function* selectUser({
            user,
            queryClient,
        }: {
            user: { id?: string; role?: string }
            queryClient: QueryClient
        }) {
            queryClient.cancelQueries()
            queryClient.clear()
            self.user.id = user.id || ''
            self.user.role = user.role || 'guest'
            self.initLoading = false
        }),
    }))
    .actions((self) => ({
        terminateSession(): void {
            self.user = cast({})
            removeSessionJWTFromCookie()
        },
        autoLogin: flow(function* _autoLogin({ queryClient }: { queryClient: QueryClient }) {
            yield server_getSessionCredentials()
                .then((res) => {
                    const credentials = res?.serverCredentials
                    if (!credentials) return

                    setAccessIdInCookie(credentials.accessJWT)
                    setSessionJWTInCookie(credentials.sessionJWT)
                    const user = parseJwt(credentials.accessJWT)
                    if (!user) return

                    self.selectUser({ user, queryClient })
                })
                .finally(() => {
                    self.onChangeField('initLoading', false)
                })
        }),
        fetchGuestData: flow(function* fetchGuestData({ navigate }: { navigate: NavigateFunction }) {
            try {
                self.userIsLoading = true
                const email = getParam_Email()
                const res = yield server_getUserDataByEmail({ email })
                if (!res.id) {
                    navigate(`/${APP_ROUTES_ENUM.REGISTER}`, { replace: true })
                    processError(
                        `We don't recognize you. May be your activation link is expired. Please restart the registration process. Thank you!`,
                    )
                    return
                }

                if (res.role !== 'guest') {
                    navigate(`/${APP_ROUTES_ENUM.LOGIN}`, { replace: true })
                    return
                }

                applySnapshot(self.user, res)
            } catch (error) {
                processError(`Please try again later`)
                console.error(error)
                navigate(`/${APP_ROUTES_ENUM.LOGIN}`, { replace: true })
            } finally {
                self.userIsLoading = false
            }
        }),
    }))
