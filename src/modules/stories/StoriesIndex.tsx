import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'
import { StoriesByFilterIndex } from './components/stories-cms/StoriesByFilterIndex'

const StoriesIndex: React.FC = observer(function StoriesIndex() {
    return (
        <Routes>
            <Route
                path={'/'}
                element={<Navigate to={`/stories/filtered-stories?filter=active`} state={{ filter: 'active' }} />}
            />
            <Route path='filtered-stories' element={<StoriesByFilterIndex />} />
        </Routes>
    )
})

export default StoriesIndex
