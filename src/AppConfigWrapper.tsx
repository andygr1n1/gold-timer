import { observer } from 'mobx-react-lite'
import { App } from './App'
import { useEffect } from 'react'
import { useTheming } from './hooks/useTheming.hook'
import { SnackbarProvider } from 'notistack'
import { StyledAlertSnackbar } from './components-x/x-snackbar/StyledAlertSnackbar'

export const AppConfigWrapper: React.FC = observer(() => {
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
    }, [])

    return (
        <>
            <SnackbarProvider
                Components={{ error: StyledAlertSnackbar }}
                autoHideDuration={4000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                domRoot={document.body}
                maxSnack={3}
            />
            <App />
        </>
    )
})
