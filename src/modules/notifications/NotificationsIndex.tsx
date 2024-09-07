import { Route, Routes } from 'react-router-dom'
import { Notifications } from './Notifications'

const NotificationsIndex: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Notifications />} />
        </Routes>
    )
}

export default NotificationsIndex
