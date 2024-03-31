import { GoalCRUDProvider } from '../goal-crud/GoalCRUD'
import { Navigate, Route, Routes } from 'react-router-dom'
import { GoalsByFilterIndex } from './GoalsByFilterIndex'
import { useSetGoalsParamsFilter } from '../../hooks/useSetGoalsParamsFilter'

export const GoalsCmsIndex: React.FC = () => {
    const { filter } = useSetGoalsParamsFilter()
    if (!filter) return null

    return (
        <GoalCRUDProvider>
            <Routes>
                <Route
                    path={'/'}
                    element={<Navigate to={`/goals/filtered-goals?filter=${filter}`} state={{ filter: `${filter}` }} />}
                />
                <Route path='filtered-goals' element={<GoalsByFilterIndex />} />
            </Routes>
        </GoalCRUDProvider>
    )
}
