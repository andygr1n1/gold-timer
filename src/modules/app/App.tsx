import { BrowserRouter } from 'react-router-dom'
import { useJwtAuth } from './hooks/useJwtAuth.hook'
import { useTheming } from './hooks/useTheming.hook'
import { AppRoutes } from './AppRoutes'
import { ConfigProvider } from 'antd'

export const App = () => {
    useTheming()
    const { isLoading } = useJwtAuth()

    if (isLoading) return <div className='authorization-page' />

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'var(--colors-cText)',
                    colorText: 'var(--colors-cText)',
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
