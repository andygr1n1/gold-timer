import type { MEDIA_QUERY_VALUES_ENUM } from "@/hooks/useMatchMedia.hook";
import type { IStoryMessage } from "@/modules/stories/services/types";
import { lazy, Suspense } from 'react'

const StoryMessageMobile = lazy(() => import('./story-message-mobile/StoryMessageMobile'))
const StoryMessageDefault = lazy(() => import('./story-message-default/StoryMessageDefault'))

export const StoryMessageIndex: React.FC<{ message: IStoryMessage; isMobile: MEDIA_QUERY_VALUES_ENUM }> = ({
    message,
    isMobile,
}) => {
    return isMobile ? (
        <Suspense fallback={<div>null</div>}>
            <StoryMessageMobile message={message} />
        </Suspense>
    ) : (
        <Suspense fallback={<div>null</div>}>
            <StoryMessageDefault message={message} />
        </Suspense>
    )
}
