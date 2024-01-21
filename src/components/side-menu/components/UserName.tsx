import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const UserName: React.FC = observer(() => {
    const { name } = useUserStore()
    return (
        <div className='font-cinzel mt-2  max-w-[200px] truncate bg-gradient-to-r from-blue-600 via-sky-500 to-sky-500 bg-clip-text text-center text-xl font-bold text-transparent  '>
            {name}
        </div>
    )
})
