import { useRootStore } from '@/StoreProvider'
import { IGoal$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const PopoverGoalActionsContent: React.FC<{ goal: IGoal$; action: () => void; forceMode?: boolean }> = observer(
    ({ goal, action: onClose, forceMode = false }) => {
        const {
            goals$: { openGoalCreator },
            modal_windows$: { goals_manager_mw$ },
        } = useRootStore()

        return (
            <div className='flex min-w-[120px] flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div className='text-gray-400'>Actions</div>
                    <div className='ml-2 flex flex-col gap-2'>
                        {goal.isRitualGoal && !goal.isFromFuture && (
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
                        {!goal.isRitualGoal && (
                            <MenuItem
                                action={() => {
                                    goal.goGoalRitualizedMode()
                                    //    goCreateEditMode(goal)
                                    goals_manager_mw$.onChangeField('visible', true)
                                    forceMode && goals_manager_mw$.onChangeField('force_mode', true)
                                    onClose()
                                }}
                                icon='game-icons:magic-gate'
                                iconClassName='text-indigo-700'
                                className='hover:text-indigo-700'
                                title='create ritual'
                            />
                        )}
                        <MenuItem
                            action={() => {
                                openGoalCreator({ selectedGoal: goal, edit_mode: true })
                                onClose()
                            }}
                            icon='material-symbols:edit-square'
                            title={'edit'}
                            iconClassName='text-teal-700'
                            className='hover:text-teal-700'
                        />

                        <MenuItem
                            action={() => {
                                goal.createNewChild()
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
                            icon={goal.is_favorite ? 'ic:baseline-favorite-border' : 'ic:outline-favorite'}
                            title={goal.is_favorite ? 'unfavorite' : 'favorite'}
                            iconClassName={'text-rose-700'}
                            className='hover:text-rose-700'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-gray-400'>Change State</div>
                    <div className='ml-2 flex flex-col gap-2'>
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
