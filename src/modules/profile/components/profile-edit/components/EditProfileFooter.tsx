import { FormFooter } from '@/components/form/FormFooter'
import { buildProfileDataUpdate } from '@/modules/profile/helpers/buildProfileDataUpdate'
import { useMutateProfile } from '@/modules/profile/service/update-profile-data/useMutateProfile'
import { editProfile$, enabledProfileDataUpdate } from '@/modules/profile/stores/editProfile.store'
import { useAtom } from 'jotai'

export const EditProfileFooter: React.FC = () => {
    const [_editProfile$, _setEditProfile$] = useAtom(editProfile$)
    const [_enabledProfileDataUpdate] = useAtom(enabledProfileDataUpdate)
    const _useMutateProfile = useMutateProfile()

    const onClose = () => {
        _setEditProfile$(() => undefined)
    }

    if (!_editProfile$) return null

    return (
        <FormFooter
            okTitle={'Save'}
            onOk={() => {
                _useMutateProfile.mutate({ data: buildProfileDataUpdate(_editProfile$) })
                onClose()
            }}
            onCancel={() => onClose()}
            disabled={!_enabledProfileDataUpdate}
        />
    )
}
