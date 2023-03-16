import { useUserStore } from '@/StoreProvider'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const UserInfo: React.FC = observer(() => {
    const { name, email, phone, birthday } = useUserStore()
    return (
        <div className='flex flex-col gap-2'>
            <UserDetail label='name' detail={name} />
            <UserDetail label='email' detail={email} />
            <UserDetail label='phone' detail={phone} />
            {birthday && <UserDetail label='birthday' detail={format(birthday, 'do MMMM yyyy')} />}
        </div>
    )
})

const UserDetail: React.FC<{ label: string; detail: string }> = observer(({ label, detail }) => {
    return (
        <div className='flex'>
            <span className='mr-2 w-20'>{label}</span>
            <span>{detail}</span>
        </div>
    )
})
