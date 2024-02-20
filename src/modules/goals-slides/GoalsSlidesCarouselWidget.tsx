import { observer } from 'mobx-react-lite'
import { GoalsSlidesCarousel } from './GoalsSlidesCarousel'

export const GoalsSlidesCarouselWidget: React.FC = observer(() => {
    return (
        <div className='flex max-h-[350px] min-h-[350px] flex-[100%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:flex-[45%]'>
            <GoalsSlidesCarousel />
        </div>
    )
})
