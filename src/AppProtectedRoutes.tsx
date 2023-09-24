import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { CreateNewGoalDialog } from './modules/goals/components/new-goal-dialog/CreateNewGoalModal'
import { GoalsManagerDialog } from './components/components-modal-windows/goals-manager-mw/GoalsManagerMw'
import { GoalsIndex } from './modules/goals/GoalsIndex'
import { ProfileIndex } from './modules/profile/ProfileIndex'
import { NotesIndex } from './modules/notes/NotesIndex'
import { SprintsIndex } from './modules/sprints/SprintsIndex'
import { DashboardIndex } from './modules/dashboard/DashboardIndex'
import { CreateEditSprintDialog } from './modules/sprints/components/create-edit-sprint/CreateEditSprintDialog'
import { CreateEditNoteDialog } from './modules/notes/components/create-edit-note/CreateEditNoteDialog'
import { SideMenuSettings } from './components/side-menu-settings/SideMenuSettings'
import { FocusGoalOfWeek } from './components/components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'
import { ProfileImageCropDialog } from './modules/profile/components/profile-avatar/ProfileImageCropDialog'

export const AppProtectedRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.PROFILE}`} element={<ProfileIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.SPRINTS}`} element={<SprintsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.GOALS}`} element={<GoalsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.NOTES}`} element={<NotesIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}`} element={<DashboardIndex />} />
            </Routes>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <FocusGoalOfWeek />
            {/*  */}
            <CreateNewGoalDialog />
            <GoalsManagerDialog />
            <CreateEditSprintDialog />
            <CreateEditNoteDialog />
            <ProfileImageCropDialog />
            {/*  */}
            {/* S I D E _ M E N U */}
            {/*  */}
            <SideMenuSettings />
        </>
    )
}
