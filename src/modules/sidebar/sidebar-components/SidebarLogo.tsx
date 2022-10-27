import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import goldenTimeLogo from '@/assets/white_color_ag_logo.svg'

export const SidebarLogo: React.FC = observer(() => {
    const { coins } = useUserStore()

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='cursor-default px-3 font-mono text-xl font-bold italic text-white' title='completed goals'>
                {coins}
            </div>
            <img src={goldenTimeLogo} height='50px' className='my-10' />
        </div>
    )
})
