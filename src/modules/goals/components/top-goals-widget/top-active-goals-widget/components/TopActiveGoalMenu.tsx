import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { IActiveGoalOptimized } from '../service/fetch_active_goals/query_activeGoals'
import { AkarIconsEyeOpen } from '@/assets/icons/AkarIconsEyeOpen'
import { useMutateGoalFavorite } from '../service/update_goal_favorite/useMutateGoalFavorite'

export const TopActiveGoalMenu: React.FC<{ goal: IActiveGoalOptimized; action: () => void; forceMode?: boolean }> = ({
    goal,
    action: onClose,
}) => {
    const mutationGoalFavorite = useMutateGoalFavorite()

    return (
        <XMenuDropdown>
            <XMenuItem>
                <div className='max-w-[250px]'>{goal.title}</div>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose()
                }}
            >
                <AkarIconsEyeOpen width={24} height={24} className='text-indigo-500' />
                <span className='capitalize'>open</span>
            </XMenuItem>

            <MenuItem
                action={() => {
                    // openEditMode(goal.id)
                    onClose()
                }}
                icon='material-symbols:edit-square'
                title={'Edit'}
                iconClassName='text-blue-600'
                className='hover:text-blue-600'
            />
            <MenuItem
                action={() => {
                    mutationGoalFavorite.mutate({ goal_id: goal.id, is_favorite: !goal.is_favorite })
                }}
                icon={!goal.is_favorite ? 'ic:baseline-favorite-border' : 'ic:outline-favorite'}
                title={goal.is_favorite ? 'Unfavorite' : 'Favorite'}
                iconClassName={'text-rose-700'}
                className='hover:text-rose-700'
            />
            <MenuItem
                action={() => {
                    // openCreateMode({ parentGoalId: goal.id })
                    onClose()
                }}
                icon='ic:round-fiber-new'
                title='Child goal'
                iconClassName='text-amber-500'
                className='hover:text-amber-500'
            />
            <XMenuDivider />
            <MenuItem
                action={() => {
                    // goal.completeGoal().finally(() => onClose())
                }}
                icon='material-symbols:check-circle-rounded'
                title='Complete'
                iconClassName='text-teal-700'
                className='hover:text-indigo-700'
            />
            <MenuItem
                action={() => {
                    // goal.deleteGoal().finally(() => onClose())
                }}
                icon='fluent:delete-dismiss-24-filled'
                title={goal.deleted_at ? 'Restore from bin' : 'Move to bin'}
                iconClassName='text-red-700'
                className='hover:text-red-700'
            />
        </XMenuDropdown>
    )
}

const MenuItem: React.FC<{
    action: () => void
    icon: string
    title: string
    className?: string
    iconClassName?: string
}> = observer(({ action, icon, title, iconClassName }) => {
    return (
        <XMenuItem onClick={action}>
            <Icon icon={icon} width={24} height={24} className={clsx(iconClassName)} />
            <span className=''>{title}</span>
        </XMenuItem>
    )
})
