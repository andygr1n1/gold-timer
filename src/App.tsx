import { Sidebar } from './modules/sidebar/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { StoreProvider } from './StoreProvider'
import { Topbar } from './modules/topbar/Topbar'

function App() {
    return (
        <Router>
            <StoreProvider>
                <div className='app flex-col'>
                    <Topbar />
                    <div className='app-body'>
                        <Sidebar />
                        <div className='m-5 flex w-full flex-auto'>
                            <AppRoutes />
                        </div>
                    </div>
                </div>
            </StoreProvider>
        </Router>
    )
}

export default App
