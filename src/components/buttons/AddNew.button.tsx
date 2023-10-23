import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const AddNew: React.FC<{ title: string; onClick?: () => void }> = observer(({ title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='group flex min-w-fit cursor-pointer items-center gap-2 p-0  text-blue-700 duration-300 hover:text-blue-600 md:m-0'
            type='button'
        >
            <Icon icon='line-md:plus' width={25} height={25} className='group-hover:text-blue-600' />
            <div className='font-kzen group-hover:text-blue-600'>{title}</div>
        </button>
    )
})
