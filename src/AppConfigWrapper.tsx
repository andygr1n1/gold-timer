import { observer } from 'mobx-react-lite'
import { App } from './App'
import { useEffect } from 'react'
import { useTheming } from './hooks/useTheming.hook'
import { notification } from 'antd'
import { useRootStore } from './StoreProvider'

export const AppConfigWrapper: React.FC = observer(() => {
    const { onChangeField } = useRootStore()
    const [api, contextHolder] = notification.useNotification()
    useEffect(() => {
        ;(async () => {
            useTheming.applyLocalStorage()

            // const filtersRes: typeof rootStore$.goals$.goals_checked_list_filter | null = await getGoalFiltersStore()
            // if (filtersRes) {
            //     rootStore$.goals$.onChangeField('goals_checked_list_filter', filtersRes)
            // } else {
            //     setGoalFiltersStore(rootStore$.goals$.goals_checked_list_filter)
            // }
            // onSnapshot(rootStore$.goals$.goals_checked_list_filter, (sn) => setGoalFiltersStore(sn))
        })()

        const handler = () => {
            // e.preventDefault()
        }

        document.addEventListener('touchstart', handler, { passive: true })
        document.addEventListener('touchend', handler, { passive: true })
        document.addEventListener('wheel', handler, { passive: true })
        document.addEventListener('touchstart', handler, { passive: true })
        document.addEventListener('touchend', handler, { passive: true })
        document.addEventListener('wheel', handler, { passive: true })
        onChangeField('notificationApi', api)
    }, [])

    return (
        <>
            {contextHolder}
            <App />
        </>
    )
})
