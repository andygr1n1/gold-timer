import { useAtom } from 'jotai'
import { selectedGoalState } from '../../stores/selectedGoal.store'
import { IconEdit } from '@/assets/icons/IconEdit'
import { IconEye } from '@/assets/icons/IconEye'
import { NewChildIcon } from '@/components/icons/NewChildIcon'
import { IconInfinity } from '@/assets/icons/IconInfinity'

export const GoalCRUDTitle = () => {
    const [state] = useAtom(selectedGoalState)
    const isEdit = state === 'edit'
    const isNew = state === 'create'
    const isNewChild = state === 'create child goal'
    const isNewRitual = state === 'ritualize'

    const icon = isEdit ? (
        <IconEdit width={24} height={24} />
    ) : isNew ? (
        <NewChildIcon width={24} height={24} />
    ) : isNewChild ? (
        <NewChildIcon width={24} height={24} />
    ) : isNewRitual ? (
        <IconInfinity width={24} height={24} className='text-teal-500' />
    ) : (
        <IconEye className='flex items-center justify-center' width={24} height={24} />
    )

    return (
        <span className='flex items-center justify-center gap-5 focus-visible:outline-none' tabIndex={0}>
            {icon}
            <span className='capitalize'>{state}</span>
        </span>
    )
}
