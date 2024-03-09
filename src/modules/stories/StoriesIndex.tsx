import { Stories } from './Stories'
import { Route, Routes } from 'react-router-dom'
import { PhoenixConnection } from './static-pages/PhoenixConnection'
import { LoveStory } from './static-pages/LoveStory'
import { HealingEye } from './static-pages/HealingEye'

export const StoriesIndex: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Stories />} />
            <Route path='phoenix-connection' element={<PhoenixConnection />} />
            <Route path='love-story' element={<LoveStory />} />
            <Route path='healing-eye' element={<HealingEye />} />
        </Routes>
    )
}
