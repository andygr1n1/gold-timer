import { ProtectedStoreProvider } from './StoreProvider'
import { SideMenu } from './components/side-menu/SideMenu'
import { AppProtectedRoutes } from './AppProtectedRoutes'

export const AppProtected: React.FC<{ user_id: string }> = ({ user_id }) => {
    return (
        <ProtectedStoreProvider userId={user_id}>
            <div className='bg-global-bg flex w-full'>
                <SideMenu />
                <div className='bg-global-bg flex w-full flex-auto flex-col pb-5'>
                    <div className='animate-opacity scrollbar-thumb-blue-500 scrollbar-track-global-bg scrollbar-thin relative flex h-full w-full flex-col overflow-auto overflow-y-scroll bg-transparent transition-all duration-300'>
                        <AppProtectedRoutes />
                    </div>
                </div>
            </div>
        </ProtectedStoreProvider>
    )
}
