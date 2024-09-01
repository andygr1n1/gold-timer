import { GoalSlide } from './GoalSlide'
import { useFetchGoalsSlides } from '../../service/useFetchGoalsSlides'

export const GoalsSlides = () => {
    const { goalsSlides } = useFetchGoalsSlides()

    return (
        <div className='m-auto flex h-full w-[340px] flex-wrap gap-5 '>
            {goalsSlides?.map((goalSlide) => <GoalSlide key={goalSlide.id} goalSlide={goalSlide} />)}
        </div>
    )
}
