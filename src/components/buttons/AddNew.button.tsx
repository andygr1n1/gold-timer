import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const AddNew: React.FC<{ title: string; onClick?: () => void }> = observer(({ title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='text-x-sky-darker hover:text-x-sky group flex min-w-[130px] cursor-pointer items-center  gap-2 p-0 duration-300 md:m-0'
            type='button'
        >
            <Icon icon='line-md:plus' width={25} height={25} className='group-hover:text-x-sky' />
            <div className='font-droid-bold group-hover:text-x-sky'>{title}</div>
        </button>
    )
})
