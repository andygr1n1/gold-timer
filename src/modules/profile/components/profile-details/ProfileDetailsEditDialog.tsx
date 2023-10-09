import { useUserStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { FormFooter } from '@/components/form/FormFooter'
import { EditPassword } from './components/EditPassword'
import { EditPhone } from './components/EditPhone'
import { EditBirthday } from './components/EditBirthday'
import { EditName } from './components/EditName'

export const ProfileDetailsEditDialog: React.FC = observer(() => {
    const { profileEditIsOpen, closeProfileEdit, updateProfileData, enabledProfileDataUpdate } = useUserStore()

    return (
        <XModal title={'Edit profile'} open={profileEditIsOpen} onCancel={closeProfileEdit}>
            {profileEditIsOpen ? (
                <>
                    <div className='flex h-full w-full  flex-auto flex-col'>
                        <EditName />
                        <EditPhone />
                        <EditBirthday />
                        <EditPassword />
                    </div>
                    <FormFooter
                        okTitle={'Save'}
                        onOk={updateProfileData}
                        onCancel={closeProfileEdit}
                        disabled={!enabledProfileDataUpdate}
                    />
                </>
            ) : null}
        </XModal>
    )
})
