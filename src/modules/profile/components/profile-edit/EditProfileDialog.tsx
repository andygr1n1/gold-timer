import { XModal } from '@/components-x/x-modal/XModal'
import { EditPassword } from './components/EditPassword'
import { EditPhone } from './components/EditPhone'
import { EditBirthday } from './components/EditBirthday'
import { EditName } from './components/EditName'
import { editProfile$ } from '../../stores/editProfile.store'
import { useAtom } from 'jotai'
import { EditProfileFooter } from './components/EditProfileFooter'

export const EditProfileDialog: React.FC = () => {
    const [_editProfile$, _setEditProfile$] = useAtom(editProfile$)

    const onClose = () => {
        _setEditProfile$(() => undefined)
    }

    return (
        <XModal title={'Edit profile'} open={!!_editProfile$} onCancel={onClose}>
            {!!_editProfile$ ? (
                <>
                    <div className='flex h-full w-full flex-auto flex-col gap-5'>
                        <EditName />
                        <EditPhone />
                        <EditBirthday />
                        <EditPassword />
                    </div>
                    <EditProfileFooter />
                </>
            ) : null}
        </XModal>
    )
}
