import { useRootStore } from '@/StoreProvider'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const PopoverGoalActionsContent: React.FC<{
    goal: IGoal$
    action: () => void
    forceMode?: boolean
}> = observer(({ goal, action: onClose }) => {
    const {
        goals$: { openGoalCreateMode: openCreateMode, openViewMode },
    } = useRootStore()

    return (
        <XMenuDropdown>
            <XMenuItem>
                <div className='max-w-[250px]'>{goal.title}</div>
            </XMenuItem>
            <MenuItem
                action={() => {
                    openViewMode(goal.id)
                    onClose()
                }}
                icon={'akar-icons:eye-open'}
                title={'Open'}
                iconClassName={'text-indigo-700'}
            />
            <MenuItem
                action={() => {
                    // goal.favoriteGoal()
                }}
                icon={!goal.is_favorite ? 'ic:baseline-favorite-border' : 'ic:outline-favorite'}
                title={goal.is_favorite ? 'Unfavorite' : 'Favorite'}
                iconClassName={'text-rose-700'}
                className='hover:text-rose-700'
            />

            <MenuItem
                action={() => {
                    openCreateMode({ parentGoalId: goal.id })
                    onClose()
                }}
                icon='ic:round-fiber-new'
                title='Child goal'
                iconClassName='text-amber-500'
                className='hover:text-amber-500'
            />
            <XMenuDivider />
            {!goal.isCompleted && (
                <MenuItem
                    action={() => {
                        // goal.completeGoal().finally(() => onClose())
                    }}
                    icon='material-symbols:check-circle-rounded'
                    title='Complete'
                    iconClassName='text-teal-700'
                    className='hover:text-indigo-700'
                />
            )}
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
})

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
