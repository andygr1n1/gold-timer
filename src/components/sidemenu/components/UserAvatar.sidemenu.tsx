import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const UserAvatarSidemenu: React.FC = observer(() => {
    return (
        <div className=' relative ml-4 flex h-16 min-h-[64px] w-16 items-center justify-center rounded-full border-2 border-solid border-global-bg bg-gray-300 font-bold text-gray-500'>
            <Icon icon={'material-symbols:person'} className='text-[#151c2c]' width={30} height={30} />
            <span className='absolute right-[1px] bottom-0 h-3 w-3 rounded-full border-2 border-solid border-global-bg bg-lime-500' />
        </div>
    )
})
