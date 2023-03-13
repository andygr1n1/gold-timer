import { observer } from 'mobx-react-lite'
import { TopActiveGoalsWidget } from './top-active-goals-widget/TopActiveGoalsWidget'
import { TopExpiredGoalsWidget } from './top-expired-goals-widget/TopExpiredGoalsWidget'
import { TopRitualGoalsWidget } from './top-ritual-goals-widget/TopRitualGoalsWidget'

export const TopGoalsWidgets: React.FC = observer(() => {
    return (
        <>
            <TopActiveGoalsWidget />
            <TopRitualGoalsWidget />
            <TopExpiredGoalsWidget />
        </>
    )
})
