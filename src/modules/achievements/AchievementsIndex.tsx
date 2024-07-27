import { Navigate, Route, Routes } from 'react-router-dom'
import { AchsByFilter } from './components/achs-by-filter/AchsByFilter'

const AchievementsIndex: React.FC = () => {
    return (
        <Routes>
            <Route
                path={'/'}
                element={
                    <Navigate to={`/achievements/filtered-achievements?filter=active`} state={{ filter: 'active' }} />
                }
            />
            <Route path='filtered-achievements' element={<AchsByFilter />} />
        </Routes>
    )
}

export default AchievementsIndex
