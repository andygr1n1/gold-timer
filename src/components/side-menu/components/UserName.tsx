import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const UserName: React.FC = observer(() => {
    const { name } = useUserStore()
    return (
        <div className='font-reggae text-cText mt-2 max-w-[200px] truncate bg-gradient-to-r text-center text-xl  '>
            {name}
        </div>
    )
})
