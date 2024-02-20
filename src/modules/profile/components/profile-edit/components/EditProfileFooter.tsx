import { StyledButton } from '@/components/buttons/StyledButton'
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
        <StyledButton
            rounded
            disabled={!_enabledProfileDataUpdate}
            size='extraLarge'
            onClick={() => {
                _useMutateProfile.mutate({ data: buildProfileDataUpdate(_editProfile$) })
                onClose()
            }}
            className='z-10 !min-w-[112px] self-end'
        >
            Save
        </StyledButton>
    )
}
