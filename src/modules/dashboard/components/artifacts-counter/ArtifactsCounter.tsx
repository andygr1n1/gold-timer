import { IconFocus } from '@/assets/icons/IconFocus'
import { ArtifactsCounterItem } from './ArtifactsCounterItem'
import { GoalsCounterDropdown } from './components/GoalsCounterDropdown'
import { useFetchArtifactsCount } from '../../services/useFetchArtifactsCount'
import { NotesCounterDropdown } from './components/NotesCounterDropdown'
import { IconBook } from '@/assets/icons/IconBook'
import { IconAchievements } from '@/assets/icons/IconAchievements'
import { AchCounterDropdown } from './components/AchCounterDropdown'
import {
    achEditorDialog$,
    AchEditorDialog$Provider,
} from '@/modules/achievements/components/ach-editor-dialog/mst/provider'
import { lazy, Suspense } from 'react'
const AchEditorDialog = lazy(() => import('@/modules/achievements/components/ach-editor-dialog/AchEditorDialog'))

export const ArtifactsCounter: React.FC = () => {
    const { activeGoalsCount, activeNotesCount, activeAchCount } = useFetchArtifactsCount()
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
            <Suspense fallback={null}>
                <AchEditorDialog$Provider store={achEditorDialog$}>
                    <AchCounterDropdown
                        button={
                            <ArtifactsCounterItem
                                count={activeAchCount}
                                icon={
                                    <IconAchievements
                                        width={24}
                                        height={24}
                                        className='cursor-pointer duration-300 group-hover:text-blue-500'
                                    />
                                }
                            />
                        }
                    />
                    <AchEditorDialog />
                </AchEditorDialog$Provider>
            </Suspense>
        </div>
    )
}
