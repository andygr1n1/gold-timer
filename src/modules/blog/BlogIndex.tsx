import { Route, Routes } from 'react-router-dom'
import { PhoenixConnection } from './static-pages/phoenix-connection/PhoenixConnection'
import { HealingEye } from './static-pages/healing-eye/HealingEye'
import { Blog } from './Blog'

const BlogIndex: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Blog />} />
            <Route path='phoenix-connection' element={<PhoenixConnection />} />
            <Route path='healing-eye' element={<HealingEye />} />
        </Routes>
    )
}

export default BlogIndex
