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
                    colorIcon: 'var(--colors-cText)',
                    colorTextDisabled: 'var(--colors-cText)',
                    colorTextPlaceholder: 'var(--colors-cText)',
                    colorText: 'var(--colors-cText)',
                    colorPrimary: 'var(--colors-cText)',
                    fontSize: 16,
                    fontFamily: 'Inter. sans-serif',
                    colorBgContainer: 'var(--colors-global-2-bg)',
                    colorBgElevated: 'var(--colors-global-bg)',
                    colorBorder: 'var(--colors-global-bg)',
                },
                components: {
                    Select: {
                        clearBg: 'var(--colors-global-bg)',
                        colorText: 'var(--colors-cText)',
                        optionHeight: 16,
                        optionFontSize: 14,
                        optionActiveBg: 'var(--colors-global-2-bg)',
                        optionSelectedColor: 'var(--colors-cText)',
                        optionSelectedBg: 'var(--colors-global-2-bg)',
                    },
                },
            }}
        >
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <AppRoutes />
            </BrowserRouter>
        </ConfigProvider>
    )
}
