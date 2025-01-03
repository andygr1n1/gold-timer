import { GuestsIndex } from './components/guests/GuestsIndex'
import { TablesViewIndex } from './components/tables-view/TablesViewIndex'
import { useAppSelector } from '@/store/useRootStore'
import { selectTablesView } from './services/weddingStoryFiltersSlice'

export const WeddingStoryViews = () => {
    const tablesView = useAppSelector(selectTablesView)

    if (tablesView) {
        return <TablesViewIndex />
    }

    return <GuestsIndex />
}
