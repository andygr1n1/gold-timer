import { flow, toGenerator, types, cast } from 'mobx-state-tree'
import { GoalRitual } from '../../modules/goals/mst/models/GoalRitual.model'
import { IUser$ } from '../types'
import { IBaseUserData, updateUserData } from '@/modules/profile/graphql/updateUserData.m'
import { processError } from '@/helpers/processError.helper'
import { UserAddon } from '../models/UserAddon.model'
import { deleteImageFromServer, uploadNewImageToServer } from '@/services/image.service'
import { SERVER_ROUTES } from '@/helpers/enums'
import { updateUserProfileImage } from '@/modules/profile/graphql/updateUserProfileImage.m'
import { User } from '../models/User.model'
import { UserEdit$ } from './UserEdit.store'
import { cloneDeep } from 'lodash-es'

export const User$ = types
    .compose(
        User,
        types.model('User$', {
            coins: 0,
            total_ritual_power: 0,
            number_of_rituals: 0,
            most_powerful_ritual: types.optional(GoalRitual, {}),
            avatar: types.maybeNull(types.string),
            addons: types.array(UserAddon),
            //
            // crop data manipulators
            // =>
            img_cropped_src: '',
            img_src: '',
            //
            user_edit: types.maybe(UserEdit$),
        }),
    )
    .views((self) => ({
        get enabledProfileDataUpdate(): boolean {
            return !!self.user_edit?.name.length && !!self.user_edit?.passwordIsValid
        },
        get profileEditIsOpen(): boolean {
            return !!self.user_edit
        },
        get isAuthenticated(): boolean {
            return !!self.id
        },
        get userStore(): IUser$ {
            return self as IUser$
        },
        get hasGoalsOfWeekAddon(): boolean {
            return !!self.addons.find((addon) => addon.isGoalsOfWeek)?.isGoalsOfWeek
        },
        get hasGoalsSliderAddon(): boolean {
            return !!self.addons.find((addon) => addon.isGoalsSlider)?.isGoalsSlider
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        closeProfileEdit(): void {
            self.user_edit = undefined
        },
        openProfileEdit(): void {
            self.user_edit = cast(cloneDeep(self))
        },
    }))
    .actions((self) => ({
        saveNewProfileImage: flow(function* _saveNewProfileImage(croppedImage: string) {
            self.img_cropped_src = croppedImage
            try {
                const newAvatar = yield* toGenerator(
                    uploadNewImageToServer(self.img_cropped_src, SERVER_ROUTES.PROFILE_IMAGE_UPLOAD),
                )
                if (!newAvatar) return
                const avatarToDelete = self.avatar
                self.avatar = newAvatar
                yield updateUserProfileImage(newAvatar)
                avatarToDelete && (yield deleteImageFromServer(avatarToDelete, SERVER_ROUTES.PROFILE_IMAGE_DELETE))
            } catch (e) {
                processError(e, 'saveNewProfileImage error')
            }
        }),
        updateProfileData: flow(function* _updateProfileData() {
            if (!self.user_edit) return

            const { name, email, birthday, updatePassword, phone } = self.user_edit

            const newData: IBaseUserData = {
                name,
                email,
                phone,
                birthday: birthday ? birthday.toDateString() : null,
                password: updatePassword,
            }

            yield* toGenerator(updateUserData(self.id, newData))

            self.name = name
            self.email = email
            self.phone = phone
            self.birthday = birthday
            self.password = updatePassword
            self.closeProfileEdit()
        }),
    }))
