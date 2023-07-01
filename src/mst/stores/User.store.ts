import { flow, toGenerator, types } from 'mobx-state-tree'
import { GoalRitual } from '../models/GoalRitual.model'
import { IUser$ } from '../types'
import { fetchUserSecret } from '@/graphql/queries/fetchUserSecret.query'
import { IBaseUserData, updateUserData } from '@/graphql/mutations/updateUserData.mutation'
import { processError } from '@/helpers/processError.helper'
import { UserAddon } from '../models/UserAddon.model'

export const User$ = types
    .model('User$', {
        id: '',
        name: '',
        phone: '',
        email: '',
        birthday: types.snapshotProcessor(types.Date, {
            preProcessor: (sn: Date | undefined | string | null) => {
                if (!sn) {
                    return new Date()
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
        password: '',
        coins: 0,
        total_ritual_power: 0,
        number_of_rituals: 0,
        most_powerful_ritual: types.optional(GoalRitual, {}),
        avatar: types.maybeNull(types.string),
        addons: types.array(UserAddon),
    })
    .views((self) => ({
        get isAuthenticated(): boolean {
            return !!self.id
        },
        get userStore(): IUser$ {
            return self as IUser$
        },
        get hasGoalsOfWeekAddon(): boolean {
            return !!self.addons.find((addon) => addon.isGoalsOfWeek)?.isGoalsOfWeek
        },
        get hasWalletAddon(): boolean {
            return !!self.addons.find((addon) => addon.isWallet)?.isWallet
        },
        get hasGoalsSliderAddon(): boolean {
            return !!self.addons.find((addon) => addon.isGoalsSlider)?.isGoalsSlider
        },
        get hasLinksAddon(): boolean {
            return !!self.addons.find((addon) => addon.isLinks)?.isLinks
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        fetchUserPassword: flow(function* _fetchUserPassword() {
            try {
                const resPassword = yield* toGenerator(fetchUserSecret(self.id))

                if (!resPassword) throw new Error('server error')

                self.password = resPassword || ''
                return resPassword
            } catch (e) {
                processError(e, 'fetchUserPassword error')
            }
        }),
        saveUpdatedDetails: flow(function* _saveUpdatedDetails() {
            try {
                const newData: IBaseUserData = {
                    name: self.name,
                    email: self.email,
                    birthday: self.birthday.toDateString(),
                    password: self.password,
                    phone: self.phone,
                }

                const res = yield* toGenerator(updateUserData(self.id, newData))

                if (!res) throw new Error('saveUpdatedDetails error')
            } catch (e) {
                processError(e, 'saveUpdatedDetails error')
            }
        }),
    }))
