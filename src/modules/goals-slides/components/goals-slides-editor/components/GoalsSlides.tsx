import { IsLoading } from '@/components/loading/IsLoading'
import { GoalSlide } from './GoalSlide'
import { useFetchGoalsSlides } from '@/modules/goals-slides/hooks/useFetchGoalsSlides'

export const GoalsSlides = () => {
    const { goalsSlides, isLoading } = useFetchGoalsSlides()

    return (
        <div data-testid='goals-slides' className='m-auto flex my-10 h-full w-[340px] flex-wrap gap-5'>
            <IsLoading isLoading={isLoading} />
            {goalsSlides.map((goalSlide) => (
                <GoalSlide key={goalSlide.id} goalSlide={goalSlide} />
            ))}
        </div>
    )
}
