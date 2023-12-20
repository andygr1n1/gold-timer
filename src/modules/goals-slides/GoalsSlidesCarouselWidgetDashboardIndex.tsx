import { observer } from 'mobx-react-lite'
import { GoalsSlidesCarousel } from './GoalsSlidesCarousel'

export const GoalsSlidesCarouselWidgetDashboardIndex: React.FC = observer(() => {
    return (
        <div className='flex max-h-[370px] min-h-[375px] flex-[100%] xl:flex-[45%]'>
            <GoalsSlidesCarousel />
        </div>
    )
})
