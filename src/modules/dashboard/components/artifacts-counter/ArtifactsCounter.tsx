import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { ArtifactsCounterItem } from './ArtifactsCounterItem'
import { GoalsCounterDropdown } from './components/GoalsCounterDropdown'
import { NotesCounterDropdown } from './components/NotesCounterDropdown'
import { SprintsCounterDropdown } from './components/SprintsCounterDropdown'

export const ArtifactsCounter: React.FC = observer(() => {
    const {
        notes$: { notesLength, openNoteCreateMode },
        sprints$: { allActiveCheckedSprintsLength, openSprintCreateMode: activateNewSprintCreator },
        goals$: { notCompletedGoalsCount: activeGoalsCount, openGoalCreateMode: openCreateMode },
    } = useRootStore()

    return (
        <div className='flex w-fit  items-center justify-center gap-5 '>
            <GoalsCounterDropdown
                button={
                    <ArtifactsCounterItem
                        // action={openCreateMode}
                        count={activeGoalsCount}
                        icon={
                            <Icon
                                icon='octicon:goal-16'
                                width={24}
                                height={24}
                                className='cursor-pointer duration-300 group-hover:text-blue-500'
                            />
                        }
                    />
                }
            />
            <NotesCounterDropdown
                button={
                    <ArtifactsCounterItem
                        // action={openNoteCreateMode}
                        count={notesLength}
                        icon={
                            <Icon
                                icon='ion:book'
                                width={24}
                                height={24}
                                className='cursor-pointer duration-300 group-hover:text-blue-500'
                            />
                        }
                    />
                }
            />

            <SprintsCounterDropdown
                button={
                    <ArtifactsCounterItem
                        // action={activateNewSprintCreator}
                        count={allActiveCheckedSprintsLength}
                        icon={
                            <Icon
                                icon='game-icons:sprint'
                                width={24}
                                height={24}
                                className='cursor-pointer duration-300 group-hover:text-blue-500'
                            />
                        }
                    />
                }
            />
        </div>
    )
})
