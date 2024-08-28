import { BrowserRouter } from 'react-router-dom'
import { useJwtAuth } from './hooks/useJwtAuth.hook'
import { useTheming } from './hooks/useTheming.hook'
import { AppRoutes } from './AppRoutes'
import { ConfigProvider } from 'antd'
import { observer } from 'mobx-react-lite'
import { Provider } from 'urql'
import { generateURQLClient } from '@/graphql/client'

export const App = observer(() => {
    useTheming()
    const { isLoading } = useJwtAuth()

    if (isLoading) return <div className='authorization-page' />

    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 4,
                    colorIcon: 'var(--colors-cText)',
                    colorTextDisabled: 'var(--colors-cText)',
                    colorTextPlaceholder: 'var(--colors-cText)',
                    colorText: 'var(--colors-cText)',
                    // colorPrimary: 'var(--colors-cText)',
                    fontSize: 16,
                    fontFamily: 'Inter. sans-serif',
                    colorBgContainer: 'var(--colors-global-2-bg)',
                    colorBgElevated: 'var(--colors-bg-elevated)',
                    colorBorder: 'rgb(30 58 138 / 0.2)',
                    boxShadowSecondary: 'transparent',
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
                    Input: {
                        activeBorderColor: '#1d2b51',
                        hoverBorderColor: '#1d2b51',
                        activeShadow: 'transparent',
                    },
                },
            }}
        >
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <Provider value={generateURQLClient()}>
                    <AppRoutes />
                </Provider>
            </BrowserRouter>
        </ConfigProvider>
    )
})
