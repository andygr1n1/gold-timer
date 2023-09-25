import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const UserName: React.FC = observer(() => {
    const { name } = useUserStore()
    return <div className='text-cText font-reggae max-w-[200px] truncate text-center text-2xl'>{name}</div>
})
