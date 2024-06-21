import { ProfileAvatarIndex } from '../profile-avatar/ProfileAvatarIndex'
import { FormLabel } from '@/components/form/FormLabel'
import { format } from 'date-fns'
import { useProfileData } from '../../service'
import { convertStringDate } from '@/helpers/date.helpers'
import { IsLoading } from '@/components/loading/IsLoading'
import { OpenProfileAction } from './components/OpenProfileAction'
import { EditProfileDialog } from '../profile-edit/EditProfileDialog'

const ProfileDetail: React.FC<{ data: string }> = ({ data }) => {
    return <div className='h-[18px] text-lg'>{data}</div>
}

export const ProfileDetails: React.FC = () => {
    const { data, isLoading } = useProfileData()
    const { name, email, phone, birthday } = data

    return (
        <>
            <EditProfileDialog />

            <div
                className='bg-global-2-bg absolute-center animate-opacity-3 relative mx-auto flex w-[calc(100%-64px)] max-w-sm flex-col
                rounded-xl px-5 py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
            >
                <IsLoading isLoading={isLoading} />

                <ProfileAvatarIndex />

                <div
                    key={isLoading.toString()}
                    className='animate-opacity-5 relative mx-auto flex min-w-[260px] flex-col rounded-md duration-300'
                >
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
                                data={birthday ? format(convertStringDate(birthday), 'do MMMM yyyy') : '-'}
                            />
                        </div>
                        <div>
                            <FormLabel title='Password:' />
                            <ProfileDetail data={'****'} />
                        </div>
                        <OpenProfileAction />
                    </div>
                </div>
            </div>
        </>
    )
}
