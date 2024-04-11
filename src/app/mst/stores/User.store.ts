import { flow, toGenerator, types } from 'mobx-state-tree'
import { processError } from '@/functions/processMessage'
import { deleteImageFromServer, uploadNewImageToServer } from '@/services/image.service'
import { SERVER_ROUTES } from '@/helpers/enums'
import { updateUserProfileImage } from '@/modules/profile/service/update-avatar/updateUserProfileImage.m'
import { rootStore$ } from '@/app/StoreProvider'
import { KEY_FetchAvatar } from '@/modules/profile/service'

export const User$ = types
    .model('User$', {
        id: '',
        avatar: types.maybeNull(types.string),
        //
        // crop data manipulators
        // =>
        img_cropped_src: '',
        img_src: '',
        //
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
    .actions((self) => ({
        saveNewProfileImage: flow(function* _saveNewProfileImage(croppedImage: string) {
            self.img_cropped_src = croppedImage
            try {
                rootStore$.onChangeField('loading', true)
                const newAvatar = yield* toGenerator(
                    uploadNewImageToServer(self.img_cropped_src, SERVER_ROUTES.PROFILE_IMAGE_UPLOAD),
                )
                if (!newAvatar) return
                const avatarToDelete = self.avatar
                self.avatar = newAvatar
                yield updateUserProfileImage(newAvatar)
                avatarToDelete && (yield deleteImageFromServer(avatarToDelete, SERVER_ROUTES.PROFILE_IMAGE_DELETE))
                rootStore$.onChangeField('loading', false)
                window.queryClient.invalidateQueries({ queryKey: KEY_FetchAvatar() })
            } catch (e) {
                processError(e, 'saveNewProfileImage error')
                rootStore$.onChangeField('loading', false)
            }
        }),
    }))
