import { observer } from 'mobx-react-lite'
import { App } from './App'
import { notification } from 'antd'
import { NotificationInstance } from 'antd/es/notification/interface'
import { useEffect } from 'react'
import { useTheming } from './hooks/useTheming.hook'

export let notificationApi: NotificationInstance | undefined = undefined

export const AppConfigWrapper: React.FC = observer(() => {
    const [api, contextHolder] = notification.useNotification()
    notificationApi = api

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
    }, [])

    return (
        <>
            {contextHolder}
            <App />
        </>
    )
})
