import { useSprintsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NewSprintButton: React.FC = observer(() => {
    return <NewSprintButtonAction />
})

const NewSprintButtonAction = observer(() => {
    const { activateNewSprintCreator } = useSprintsStore()

    const handleOpenNewSprintDialog = () => {
        activateNewSprintCreator()
    }

    return (
        <button
            onClick={handleOpenNewSprintDialog}
            className='text-x-sky-darker hover:text-x-sky group m-0 flex cursor-pointer items-center justify-center gap-2 p-0 duration-300'
            type='button'
        >
            <Icon icon='line-md:plus' width={25} height={25} className='group-hover:text-x-sky' />
            <div className='font-droid-bold group-hover:text-x-sky text-sm'>Add new sprint</div>
        </button>
    )
})
