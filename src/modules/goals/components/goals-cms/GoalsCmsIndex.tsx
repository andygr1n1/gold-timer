import { Navigate, Route, Routes } from 'react-router-dom'
import { GoalsByFilterIndex } from './GoalsByFilterIndex'
import { useSetGoalsParamsFilter } from '../../shared-hooks/useSetGoalsParamsFilter'

const GoalsCmsIndex: React.FC = () => {
    const { filter } = useSetGoalsParamsFilter()
    if (!filter) return null

    return (
        <Routes>
            <Route
                path={'/'}
                element={<Navigate to={`/goals/filtered-goals?filter=${filter}`} state={{ filter: `${filter}` }} />}
            />
            <Route path='filtered-goals' element={<GoalsByFilterIndex />} />
        </Routes>
    )
}

export default GoalsCmsIndex
