import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NewSprintButtonMobile: React.FC = observer(() => {
    return <NewSprintButtonAction />
})

const NewSprintButtonAction = observer(() => {
    const {
        sprints$: { activateNewSprintCreator },
        side_menu$: {
            sprints_side_menu: { onChangeField },
        },
    } = useRootStore()

    const handleOpenNewSprintDialog = () => {
        activateNewSprintCreator()
        onChangeField('visible', false)
    }

    return (
        <button
            onClick={handleOpenNewSprintDialog}
            className='text-cText flex w-full cursor-pointer  items-center justify-start  gap-2 rounded-full font-bold'
            type='button'
        >
            <Icon icon='line-md:plus' className='group-hover:text-x-sky h-6 w-6' />
            <div className='font-droid-bold group-hover:text-x-sky text-xs'>Add sprint</div>
        </button>
    )
})
//   ${!avatar ? 'bg-gray-300' : ''}`}
