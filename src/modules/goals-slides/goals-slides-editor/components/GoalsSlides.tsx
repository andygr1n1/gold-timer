import { GoalSlide } from './GoalSlide'
import { useFetchGoalsSlides } from '../../service/useFetchGoalsSlides'

export const GoalsSlides = () => {
    const { goalsSlides } = useFetchGoalsSlides()

    return (
        <div data-testid='goals-slides' className='m-auto flex my-10 h-full w-[340px] flex-wrap gap-5 '>
            {goalsSlides?.map((goalSlide) => <GoalSlide key={goalSlide.id} goalSlide={goalSlide} />)}
        </div>
    )
}
