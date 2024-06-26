import { IconEdit, IconEye, IconNew } from '@/assets/icons'
import { useGoalEditor$ } from '../../stores/useGoalEditor.store'

export const GoalEditorTitle = () => {
    const { newMode, editMode } = useGoalEditor$()
    let stateText: React.ReactNode = (
        <>
            <IconEye className='flex items-center justify-center' width={24} height={24} />
            View Goal
        </>
    )
    if (newMode)
        stateText = (
            <>
                <IconNew width={24} height={24} />
                New Goal
            </>
        )
    if (editMode)
        stateText = (
            <>
                <IconEdit width={24} height={24} />
                Edit Goal
            </>
        )

    return (
        <span className='flex items-center justify-center gap-5 focus-visible:outline-none' tabIndex={0}>
            {stateText}
        </span>
    )
}
