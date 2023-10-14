import { observer } from 'mobx-react-lite'
import { TopActiveGoalsWidget } from './top-active-goals-widget/TopActiveGoalsWidget'
import { TopExpiredGoalsWidget } from './top-expired-goals-widget/TopExpiredGoalsWidget'
import { TopFavoriteGoalsWidget } from './top-favorite-goals-widget/TopFavoriteGoalsWidget'
import { TopRitualGoalsWidget } from './top-ritual-goals-widget/TopRitualGoalsWidget'

export const TopGoalsWidgets: React.FC = observer(() => {
    return (
        <div className='flex flex-[50%] flex-col gap-8 '>
            <TopFavoriteGoalsWidget />
            <TopActiveGoalsWidget />
            <TopRitualGoalsWidget />
            <TopExpiredGoalsWidget />
        </div>
    )
})
