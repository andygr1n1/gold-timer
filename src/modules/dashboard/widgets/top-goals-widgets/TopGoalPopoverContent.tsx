import { useGoalsStore } from '@/StoreProvider'
import { toggleGoalsListModalVisibility } from '@/components-modals/goals-list-modal/GoalsListModal'
import { IGoal$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const TopGoalPopoverContent: React.FC<{ goal: IGoal$; action: () => void }> = observer(
    ({ goal, action: onClose }) => {
        const { goCreateEditMode } = useGoalsStore()

        return (
            <div className='flex min-w-[120px] flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div className='text-gray-400'>Actions</div>
                    <div className='ml-2'>
                        {goal.isRitualGoal && (
                            <MenuItem
                                action={() => {
                                    goal.enforceGoalRitual().finally(() => onClose())
                                }}
                                icon='game-icons:magic-gate'
                                iconClassName='text-indigo-700'
                                className='hover:text-indigo-700'
                                title='ritualize'
                            />
                        )}
                        <MenuItem
                            action={() => {
                                toggleGoalsListModalVisibility({ force_edit: true })
                                goCreateEditMode(goal)
                                onClose()
                            }}
                            icon='material-symbols:edit-square'
                            title={'edit'}
                            iconClassName='text-teal-700'
                            className='hover:text-teal-700'
                        />
                        <MenuItem
                            action={() => {
                                goal.favoriteGoal()
                            }}
                            icon={goal.is_favorite ? 'ic:baseline-favorite-border' : 'ic:outline-favorite'}
                            title={goal.is_favorite ? 'unfavorite' : 'favorite'}
                            iconClassName={goal.is_favorite ? 'text-rose-700' : 'text-rose-700'}
                            className='hover:text-rose-700'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-gray-400'>Change State</div>
                    <div className='ml-2'>
                        <MenuItem
                            action={() => {
                                goal.completeGoal().finally(() => onClose())
                            }}
                            icon='material-symbols:check-circle-rounded'
                            title='complete'
                            iconClassName='text-green-700'
                            className='hover:text-green-700'
                        />
                    </div>
                </div>
            </div>
        )
    },
)

const MenuItem: React.FC<{
    action: () => void
    icon: string
    title: string
    className?: string
    iconClassName?: string
}> = observer(({ action, icon, title, iconClassName = '', className = '' }) => {
    return (
        <div className={`group mr-3 flex cursor-pointer items-center gap-2 ${className}`} onClick={action}>
            <Icon icon={icon} className={iconClassName} width={16} height={16} />
            <span className=''>{title}</span>
        </div>
    )
})
