import { ModuleWrapper } from '@/components/ModuleWrapper'
import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { stories$, Stories$Provider } from './mst/provider'
import StoryEditorDialog from '../story-editor-dialog/StoryEditorDialog'
import { storyEditorDialog$, StoryEditorDialog$Provider } from '../story-editor-dialog/mst/provider'
import { StoriesHeader } from './components/stories-header/StoriesHeader'
import { StoriesList } from './components/StoriesList'
import { type IArtifactStatus } from '@/services/types'

export const StoriesByFilterIndex = () => {
    const location = useLocation()
    const queryFilter: IArtifactStatus = location.state?.filter

    return (
        <ModuleWrapper>
            <StoryEditorDialog$Provider store={storyEditorDialog$}>
                <Suspense fallback={null}>
                    <StoryEditorDialog />
                </Suspense>
                <Stories$Provider store={stories$}>
                    <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                        <StoriesHeader />
                        <StoriesList key={queryFilter} queryFilter={queryFilter} />
                    </div>
                </Stories$Provider>
            </StoryEditorDialog$Provider>
        </ModuleWrapper>
    )
}
