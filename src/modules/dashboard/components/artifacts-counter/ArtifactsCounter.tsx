import { IconFocus } from '@/assets/icons/IconFocus'
import { ArtifactsCounterItem } from './ArtifactsCounterItem'
import { GoalsCounterDropdown } from './components/GoalsCounterDropdown'
import { useFetchArtifactsCount } from '../../services/useFetchArtifactsCount'
import { NotesCounterDropdown } from './components/NotesCounterDropdown'
import { IconBook } from '@/assets/icons/IconBook'

export const ArtifactsCounter: React.FC = () => {
    const { activeGoalsCount, activeNotesCount } = useFetchArtifactsCount()
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
            </>
        </div>
    )
}
