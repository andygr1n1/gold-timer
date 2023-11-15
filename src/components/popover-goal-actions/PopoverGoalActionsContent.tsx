import { useRootStore } from '@/StoreProvider'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const PopoverGoalActionsContent: React.FC<{ goal: IGoal$; action: () => void; forceMode?: boolean }> = observer(
    ({ goal, action: onClose }) => {
        const {
            goals$: { openCreateMode, openEditMode },
        } = useRootStore()

        return (
            <XMenuDropdown>
                {goal.hasRitualPower && !goal.isFromFuture && (
                    <MenuItem
                        action={() => {
                            goal.enforceGoalRitual().finally(() => onClose())
                        }}
                        icon='game-icons:magic-gate'
                        title='ritualize'
                    />
                )}
                <MenuItem
                    action={() => {
                        openEditMode(goal.id)
                        onClose()
                    }}
                    icon='material-symbols:edit-square'
                    title={'edit'}
                    iconClassName='text-teal-700'
                    className='hover:text-teal-700'
                />

                <MenuItem
                    action={() => {
                        openCreateMode({ parentGoalId: goal.id })
                        onClose()
                    }}
                    icon='material-symbols:check-circle-rounded'
                    title='new child goal'
                    iconClassName='text-green-700'
                    className='hover:text-green-700'
                />
                <MenuItem
                    action={() => {
                        goal.favoriteGoal()
                    }}
                    icon={!goal.is_favorite ? 'ic:baseline-favorite-border' : 'ic:outline-favorite'}
                    title={goal.is_favorite ? 'unfavorite' : 'favorite'}
                    iconClassName={'text-rose-700'}
                    className='hover:text-rose-700'
                />
                <XMenuDivider />
                <MenuItem
                    action={() => {
                        goal.completeGoal().finally(() => onClose())
                    }}
                    icon='material-symbols:check-circle-rounded'
                    title='complete'
                />
            </XMenuDropdown>
        )
    },
)

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
