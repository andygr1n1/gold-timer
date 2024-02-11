import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { ArtifactsCounterItem } from './ArtifactsCounterItem'
import { GoalsCounterDropdown } from './components/GoalsCounterDropdown'
import { NotesCounterDropdown } from './components/NotesCounterDropdown'
import { SprintsCounterDropdown } from './components/SprintsCounterDropdown'
import { useFetchArtifactsCount } from './service/useFetchArtifactsCount'
import { CRUD_NoteDialog } from '@/modules/notes/components/crud-note/CRUD_NoteDialog'

export const ArtifactsCounter: React.FC = observer(() => {
    // const {
    //     notes$: { notesLength },
    //     sprints$: { allActiveCheckedSprintsLength },
    // } = useRootStore()

    const { activeGoalsCount, activeNotesCount, activeSprintsCount } = useFetchArtifactsCount()

    return (
        <div className='flex w-fit items-center justify-center gap-5 '>
            <GoalsCounterDropdown
                button={
                    <ArtifactsCounterItem
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
                        count={activeNotesCount}
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
            <CRUD_NoteDialog />

            <SprintsCounterDropdown
                button={
                    <ArtifactsCounterItem
                        // action={activateNewSprintCreator}
                        // count={allActiveCheckedSprintsLength}
                        count={activeSprintsCount}
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
