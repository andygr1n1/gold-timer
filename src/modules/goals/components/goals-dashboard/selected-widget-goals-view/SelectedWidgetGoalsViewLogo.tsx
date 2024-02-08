import { useGoalsStore } from '@/StoreProvider'
import { GOAL_STATUS_ENUM_FILTERS } from '@/lib/enums'
import { observer } from 'mobx-react-lite'
import { ActiveIcon, ExpiredIcon, FavoriteIcon, RitualIcon } from '../components/Icons'
import { ReactNode } from 'react'

export const SelectedWidgetGoalsViewLogo = observer(() => {
    const {
        goals_filter$: { selected_widget_goals_context },
    } = useGoalsStore()

    let node: ReactNode | null = null
    switch (selected_widget_goals_context) {
        case GOAL_STATUS_ENUM_FILTERS.ACTIVE:
            node = <ActiveIcon />
            break
        case GOAL_STATUS_ENUM_FILTERS.RITUALIZED:
            node = <RitualIcon />
            break
        case GOAL_STATUS_ENUM_FILTERS.EXPIRED:
            node = <ExpiredIcon />
            break
        case GOAL_STATUS_ENUM_FILTERS.FAVORITE:
            node = <FavoriteIcon />
            break
        default:
            node = null
            break
    }
    return node ? <div className='mb-5 flex w-full justify-center'>{node}</div> : null
})
