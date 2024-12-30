import { observer } from 'mobx-react-lite'
import { useGuestsFilters$ } from '../mst/guestsFilters.provider'
import { GuestsIndex } from './guests/GuestsIndex'
import { TablesViewIndex } from './tables-view/TablesViewIndex'

export const WsViews = observer(() => {
    const { tablesView } = useGuestsFilters$()

    if (tablesView) {
        return <TablesViewIndex />
    }

    return <GuestsIndex />
})
