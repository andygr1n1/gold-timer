import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ProfileAvatarIndex } from '../profile-avatar/ProfileAvatarIndex'
import { FormLabel } from '@/components/form/FormLabel'
import { format } from 'date-fns'
import { ProfileDetailsEditDialog } from './ProfileDetailsEditDialog'
import { Icon } from '@iconify/react'
import styles from '../../Profile.module.scss'

export const ProfileDetails: React.FC = observer(() => {
    const { name, email, phone, birthday, openProfileEdit } = useUserStore()

    return (
        <div className={styles['profile-container']}>
            <ProfileDetailsEditDialog />
            <ProfileAvatarIndex />

            <div className='relative mx-auto mt-20 flex w-[280px] flex-col rounded-md duration-300'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <FormLabel title='Email:' />
                        <div>{email}</div>
                    </div>
                    <div>
                        <FormLabel title='Name:' />
                        <div>{name}</div>
                    </div>
                    <div>
                        <FormLabel title='Phone:' />
                        <div>{phone}</div>
                    </div>
                    <div>
                        <FormLabel title='Birthday:' />
                        <div className='h-[18px]'>{birthday ? format(birthday, 'do MMMM yyyy') : '-'}</div>
                    </div>
                    <div>
                        <FormLabel title='Password:' />
                        <div>****</div>
                    </div>
                    <div className='flex w-full justify-end'>
                        <Icon
                            icon='material-symbols:edit'
                            className='text-cText hover:text-xBlue-1 cursor-pointer opacity-70 duration-300 hover:opacity-100'
                            width={24}
                            height={24}
                            onClick={openProfileEdit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})
