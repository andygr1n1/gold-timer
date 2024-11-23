import { Route, Routes } from 'react-router-dom'
import { WeddingStoryAdmin } from './WeddingStoryAdmin'

const WeddingStoryAdminIndex: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<WeddingStoryAdmin />} />
        </Routes>
    )
}

export default WeddingStoryAdminIndex
