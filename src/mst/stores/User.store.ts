import { types } from 'mobx-state-tree'
import { GoalRitual } from '../models/GoalRitual.model'
import { UserAddon } from '../models/UserAddon.model'

export const User$ = types
    .model('User$', {
        id: '',
        name: '',
        phone: '',
        email: '',
        birthday: types.snapshotProcessor(types.Date, {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return new Date()
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
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
    }))
