import { useRootStore } from '@/StoreProvider'
import { XDivider } from '@/components-x/x-divider/XDivider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CreateNewItems: React.FC = observer(() => {
    const {
        side_menu$: { onChangeField: onChangeFieldSideMenu$ },
        goals$: { openGoalCreator: goCreateNewGoalMode },
        sprints$: { activateNewSprintCreator },
        notes$: { activateCreateEditMode },
    } = useRootStore()

    const onClose = () => onChangeFieldSideMenu$('visible', false)

    const onCreateGoal = () => {
        onClose()
        goCreateNewGoalMode()
    }

    const onCreateNote = () => {
        onClose()
        activateCreateEditMode({ note: null })
    }

    const onCreateSprint = () => {
        onClose()
        activateNewSprintCreator()
    }

    const onCreateGallery = () => {
        onClose()
        //TODO  to create gallery editor
    }

    return (
        <>
            <div className='flex w-full justify-center text-gray-400 '>Create</div>
            <XDivider className='w-[125px] bg-gray-700' />
            <button onClick={onCreateGoal} className='flex items-center gap-2'>
                <Icon icon='octicon:goal-16' width={20} height={20} />
                <span>Goal</span>
            </button>
            <XDivider className='w-[125px] bg-gray-700' />
            <button onClick={onCreateNote} className='flex items-center gap-2'>
                <Icon icon='fluent:task-list-square-ltr-16-filled' width={20} height={20} />
                <span>Note</span>
            </button>
            <XDivider className='w-[125px] bg-gray-700' />
            <button onClick={onCreateSprint} className='flex items-center gap-2'>
                <Icon icon='game-icons:sprint' width={20} height={20} />
                <span>Sprint</span>
            </button>
            <XDivider className='w-[125px] bg-gray-700' />
            <button onClick={onCreateGallery} className='flex items-center gap-2'>
                <Icon icon='solar:gallery-bold' width={20} height={20} />
                <span>Gallery</span>
            </button>
        </>
    )
})
