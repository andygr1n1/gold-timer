// import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ProfileAvatarIndex } from '../profile-avatar/ProfileAvatarIndex'
import { FormLabel } from '@/components/form/FormLabel'
import { format } from 'date-fns'
import { ProfileDetailsEditDialog } from './ProfileDetailsEditDialog'
// import { StyledButton } from '@/components/buttons/StyledButton'
// import { IconEdit } from '@/assets/icons'
import { useProfileData } from '../../service'
import { convertStringToDate } from '@/functions/date.helpers'

const ProfileDetail: React.FC<{ data: string }> = ({ data }) => {
    return <div className='h-[18px] text-lg'>{data}</div>
}

export const ProfileDetails: React.FC = observer(() => {
    const { data, isLoading } = useProfileData()
    const { name, email, phone, birthday } = data

    return (
        <>
            <ProfileDetailsEditDialog />
            <div className='bg-global-2-bg mx-auto flex w-[calc(100%-64px)] max-w-sm flex-col rounded-xl px-5 py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'>
                <ProfileAvatarIndex />

                <div className='relative mx-auto flex min-w-[260px] flex-col rounded-md duration-300'>
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
                            <ProfileDetail
                                data={birthday ? format(convertStringToDate(birthday), 'do MMMM yyyy') : '-'}
                            />
                        </div>
                        <div>
                            <FormLabel title='Password:' />
                            <ProfileDetail data={'****'} />
                        </div>
                        {/* <div className='flex w-full justify-end '>
                            <StyledButton
                                size='extraLarge'
                                className='w-28'
                                variant='text'
                                onClick={openProfileEdit}
                                startIcon={<IconEdit className='opacity-70' width={24} height={24} />}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
})
