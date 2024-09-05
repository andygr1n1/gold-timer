import { Route, Routes } from 'react-router-dom'
import { PhoenixConnection } from './static-pages/phoenix-connection/PhoenixConnection'
import { HealingEye } from './static-pages/healing-eye/HealingEye'
import { Notifications } from './Notifications'

const NotificationsIndex: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Notifications />} />
            <Route path='phoenix-connection' element={<PhoenixConnection />} />
            <Route path='healing-eye' element={<HealingEye />} />
        </Routes>
    )
}

export default NotificationsIndex
