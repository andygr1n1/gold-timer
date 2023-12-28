import { observer } from 'mobx-react-lite'
import { GoalsSlidesCarousel } from './GoalsSlidesCarousel'

export const GoalsSlidesCarouselWidget: React.FC = observer(() => {
    return (
        <div className='animate-opacity-5 flex max-h-[370px] min-h-[375px] flex-[100%] xl:flex-[45%]'>
            <GoalsSlidesCarousel />
        </div>
    )
})
