import { observer } from 'mobx-react-lite'
import { ArtifactsCounterItem } from './ArtifactsCounterItem'
import { GoalsCounterDropdown } from './components/GoalsCounterDropdown'
import { NotesCounterDropdown } from './components/NotesCounterDropdown'
import { SprintsCounterDropdown } from './components/SprintsCounterDropdown'
import { useFetchArtifactsCount } from './service/useFetchArtifactsCount'
import { NoteCRUD } from '@/modules/notes/components/crud-note/NoteCRUD'
import { IconBook, IconFocus, IconSprint } from '@/assets/icons'
import { CreateEditSprintDialog } from '@/modules/sprints/components/create-edit-sprint/CreateEditSprintDialog'
import { isUnderDevelopment } from '@/helpers/isUnderDevelopment.helper'

export const ArtifactsCounter: React.FC = observer(() => {
    const { activeGoalsCount, activeNotesCount, activeSprintsCount } = useFetchArtifactsCount()

    return (
        <div className='xl:flex hidden w-fit items-center justify-center gap-5 '>
            <GoalsCounterDropdown
                button={
                    <ArtifactsCounterItem
                        count={activeGoalsCount}
                        icon={
                            <IconFocus
                                width={24}
                                height={24}
                                className='cursor-pointer duration-300 group-hover:text-blue-500'
                            />
                        }
                    />
                }
            />
            <>
                <NotesCounterDropdown
                    button={
                        <ArtifactsCounterItem
                            // action={openNoteCreateMode}
                            count={activeNotesCount}
                            icon={
                                <IconBook
                                    width={24}
                                    height={24}
                                    className='cursor-pointer duration-300 group-hover:text-blue-500'
                                />
                            }
                        />
                    }
                />
                <NoteCRUD />
            </>

            {isUnderDevelopment() && (
                <>
                    <SprintsCounterDropdown
                        button={
                            <ArtifactsCounterItem
                                // action={activateNewSprintCreator}
                                // count={allActiveCheckedSprintsLength}
                                count={activeSprintsCount}
                                icon={
                                    <IconSprint
                                        width={24}
                                        height={24}
                                        className='cursor-pointer duration-300 group-hover:text-blue-500'
                                    />
                                }
                            />
                        }
                    />
                    <CreateEditSprintDialog />
                </>
            )}
        </div>
    )
})
