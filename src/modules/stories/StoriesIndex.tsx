import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'
import { StoriesByFilterIndex } from './components/stories-cms/StoriesByFilterIndex'
import { lazy, Suspense } from 'react'
const StoryMakerIndex = lazy(() => import('./components/story-maker/StoryMakerIndex'))

const StoriesIndex: React.FC = observer(function StoriesIndex() {
    return (
        <Routes>
            <Route
                path={'/'}
                element={<Navigate to={`/stories/filtered-stories?filter=active`} state={{ filter: 'active' }} />}
            />
            <Route path='filtered-stories' element={<StoriesByFilterIndex />} />
            <Route
                path={'filtered-stories/:dynamicSegment'}
                element={
                    <Suspense fallback={null}>
                        <StoryMakerIndex />
                    </Suspense>
                }
            />
        </Routes>
    )
})

export default StoriesIndex
