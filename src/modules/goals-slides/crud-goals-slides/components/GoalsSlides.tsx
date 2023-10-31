import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { GoalSlide } from './GoalSlide'

export const GoalsSlides: React.FC = observer(() => {
    const {
        goals_slides$: { goals_slides },
    } = useRootStore()

    return (
        <div className='m-auto flex h-full w-[340px] flex-wrap gap-5 '>
            {goals_slides.map((goalSlide) => (
                <GoalSlide key={goalSlide.id} goalSlide={goalSlide} />
            ))}
        </div>
    )
})
