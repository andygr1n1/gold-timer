import { useAtom } from 'jotai'
import { selectedGoalState } from '../../stores/selectedGoal.store'
import { capitalize } from 'lodash-es'
import { IconEdit, IconEye, IconInfinity, IconNew } from '@/assets/icons'

export const GoalCRUDTitle = () => {
    const [state] = useAtom(selectedGoalState)
    const isEdit = state === 'edit'
    const isNew = state === 'create'
    const isNewChild = state === 'create child'
    const isNewRitual = state === 'ritualize'

    const icon = isEdit ? (
        <IconEdit width={24} height={24} />
    ) : isNew ? (
        <IconNew width={24} height={24} />
    ) : isNewChild ? (
        <IconNew width={24} height={24} />
    ) : isNewRitual ? (
        <IconInfinity width={24} height={24} className='text-teal-500' />
    ) : (
        <IconEye className='flex items-center justify-center' width={24} height={24} />
    )

    return (
        <span className='flex items-center justify-center gap-5 focus-visible:outline-none' tabIndex={0}>
            {icon}
            <span>{capitalize(state)} goal</span>
        </span>
    )
}
