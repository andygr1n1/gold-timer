import { GoalCRUDProvider } from '../goals/components/goal-crud/GoalCRUD'
import { Dashboard } from './components/Dashboard'
import { ActiveGoalFilterView } from '../goals/components/goals-dashboard/selected-widget-goals-view/ActiveGoalFilterView'
import { Route, Routes } from 'react-router-dom'

export const DashboardIndex: React.FC = () => {
    return (
        <GoalCRUDProvider>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='filtered-goals' element={<ActiveGoalFilterView />} />
            </Routes>
        </GoalCRUDProvider>
    )
}
