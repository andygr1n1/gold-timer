import { ModuleWrapper } from '@/components/ModuleWrapper'
import { IArtifactStatus } from '@/services/types'
import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'

export const StoriesByFilterIndex = () => {
    const location = useLocation()
    const queryFilter: IArtifactStatus = location.state?.filter

    return (
        <ModuleWrapper>
            <Suspense fallback={null}>
                <StoryEditorDialog$Provider store={storyEditorDialog$}>
                    <StoryEditorDialog />
                </StoryEditorDialog$Provider>
            </Suspense>
            <Stories$Provider store={stories$}>
                <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                    <StoriesHeader />
                    <StoriesList key={queryFilter} queryFilter={queryFilter} />
                </div>
            </Stories$Provider>
        </ModuleWrapper>
    )
}
