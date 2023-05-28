import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const LinkSegmentAdd: React.FC = observer(() => {
    return (
        <div className='group flex w-full cursor-pointer items-center justify-center  gap-3 rounded-lg bg-global-2-bg px-4 py-3 text-sm shadow-lg shadow-black/30 xl:w-auto'>
            <div className='flex h-10 w-10  items-center justify-center rounded-full bg-global-bg '>
                <Icon
                    icon='akar-icons:plus'
                    width={30}
                    height={30}
                    className=' text-cText duration-300 group-hover:text-blue-500'
                />
            </div>
        </div>
    )
})
