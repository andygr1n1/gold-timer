import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ProfileAvatarIndex } from '../profile-avatar/ProfileAvatarIndex'
import { FormLabel } from '@/components/form/FormLabel'
import { format } from 'date-fns'
import { ProfileDetailsEditDialog } from './ProfileDetailsEditDialog'
import { Icon } from '@iconify/react'
import { StyledButton } from '@/components/buttons/StyledButton'

const ProfileDetail: React.FC<{ data: string }> = ({ data }) => {
    return <div className='h-[18px] text-lg'>{data}</div>
}

export const ProfileDetails: React.FC = observer(() => {
    const { name, email, phone, birthday, openProfileEdit } = useUserStore()

    return (
        <div className='bg-global-2-bg mx-auto flex w-[calc(100%-64px)] max-w-[400px] flex-col rounded-xl px-5 py-8 shadow-xl shadow-black/30 transition-all'>
            <ProfileDetailsEditDialog />
            <ProfileAvatarIndex />

            <div className='relative mx-auto mt-10 flex min-w-[260px] flex-col rounded-md  duration-300'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <FormLabel title='Email:' />
                        <ProfileDetail data={email} />
                    </div>
                    <div>
                        <FormLabel title='Name:' />
                        <ProfileDetail data={name} />
                    </div>
                    <div>
                        <FormLabel title='Phone:' />
                        <ProfileDetail data={phone} />
                    </div>
                    <div>
                        <FormLabel title='Birthday:' />
                        <ProfileDetail data={birthday ? format(birthday, 'do MMMM yyyy') : '-'} />
                    </div>
                    <div>
                        <FormLabel title='Password:' />
                        <ProfileDetail data={'****'} />
                    </div>
                    <div className='flex w-full justify-end '>
                        <StyledButton
                            size='extraLarge'
                            className='w-28'
                            variant='text'
                            onClick={openProfileEdit}
                            startIcon={<Icon icon='material-symbols:edit' className='' width={20} height={20} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})
