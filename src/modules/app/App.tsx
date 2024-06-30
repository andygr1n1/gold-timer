import { BrowserRouter } from 'react-router-dom'
import { useJwtAuth } from './hooks/useJwtAuth.hook'
import { useTheming } from './hooks/useTheming.hook'
import { AppRoutes } from './AppRoutes'
import { ConfigProvider } from 'antd'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/components/side-menu/stores/themingStore'

export const App = () => {
    useTheming()
    const [isDarkMode] = useAtom(darkModeAtom)
    const { isLoading } = useJwtAuth()

    if (isLoading) return <div className='authorization-page' />

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: isDarkMode ? '#FFFFFF' : '#000000',
                    fontSize: 16,
                    fontFamily: 'Inter. sans-serif',
                    colorBgContainer: 'var(--colors-global-bg)',
                },
            }}
        >
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <AppRoutes />
            </BrowserRouter>
        </ConfigProvider>
    )
}
