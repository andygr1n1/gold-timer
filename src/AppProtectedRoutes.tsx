import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { CreateNewGoalDialog } from './modules/goals/components/new-goal-dialog/CreateNewGoalModal'
import { GoalsManagerDialog } from './components/components-modal-windows/goals-manager-mw/GoalsManagerMw'
import { AchievementsIndex } from './modules/achievements/AchievementsIndex'
import { GoalsIndex } from './modules/goals/GoalsIndex'
import { ProfileIndex } from './modules/profile/ProfileIndex'
import { TasksIndex } from './modules/notes/NotesIndex'
import { SprintsIndex } from './modules/sprints/SprintsIndex'
import { DashboardIndex } from './modules/dashboard/DashboardIndex'
import { NewSprintDialog } from './modules/sprints/components/new-sprint-dialog/NewSprintDialog'
import { CreateNewNoteDialog } from './modules/notes/components/CreateNewNoteDialog'
import { SideMenuSettings } from './components/side-menu-settings/SideMenuSettings'

export const AppProtectedRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.PROFILE}`} element={<ProfileIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.ACHIEVEMENTS}`} element={<AchievementsIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.SPRINTS}`} element={<SprintsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.GOALS}`} element={<GoalsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.NOTES}`} element={<TasksIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}`} element={<DashboardIndex />} />
            </Routes>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <CreateNewGoalDialog />
            <GoalsManagerDialog />
            <NewSprintDialog />
            <CreateNewNoteDialog />
            {/*  */}
            {/* S I D E _ M E N U */}
            {/*  */}
            <SideMenuSettings />
        </>
    )
}
