import { IconFocus } from '@/assets/icons/IconFocus'
import { ArtifactsCounterItem } from './ArtifactsCounterItem'
import { GoalsCounterDropdown } from './components/GoalsCounterDropdown'
import { useFetchArtifactsCount } from './service/useFetchArtifactsCount'

export const ArtifactsCounter: React.FC = () => {
    const { activeGoalsCount } = useFetchArtifactsCount()
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
            {/* <>
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
            </> */}

            {/* {isUnderDevelopment() && (
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
            )} */}
        </div>
    )
}
