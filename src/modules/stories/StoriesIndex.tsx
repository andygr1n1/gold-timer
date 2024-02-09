import { Stories } from './Stories'
import { Route, Routes } from 'react-router-dom'
import { Patronus } from './static-pages/Patronus'

export const StoriesIndex: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Stories />} />
            <Route path='patronus' element={<Patronus />} />
        </Routes>
    )
}
