import { toggleGoalsFilterModalVisibility } from '@/components/modals/goals-filter-modal/GoalsFilterModal'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const GoalsButtonsOverviewWidget: React.FC = observer(() => {
    return (
        <div className='flex h-[300px] w-[260px] flex-wrap justify-end gap-5 rounded-md bg-global-bg p-5'>
            <CreateNewGoalAction />
            <FilterGoalsAction />
            <FrozenGoalsButton />
            <CompletedGoalsButton />
            <ActiveGoalsButton />
        </div>
    )
})

const CreateNewGoalAction = observer(() => {
    const { goCreateNewGoalMode } = useGoalsStore()

    return (
        <button
            title='Create new goal'
            onClick={goCreateNewGoalMode}
            className='
            flex flex-[40%] cursor-pointer items-center justify-center 
            rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400'
        >
            <span className='text-xs'>expired</span>
        </button>
    )
})

const FilterGoalsAction = observer(() => {
    return (
        <button
            title='Filter goals menu'
            onClick={toggleGoalsFilterModalVisibility}
            className='
            flex flex-[40%] cursor-pointer items-center justify-center 
            rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400'
        >
            <span className='text-xs'>ritual</span>
        </button>
    )
})

const FrozenGoalsButton = observer(() => {
    return (
        <button
            title='Filter goals menu'
            onClick={toggleGoalsFilterModalVisibility}
            className='
            flex flex-[40%] cursor-pointer items-center justify-center 
            rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400'
        >
            <span className='text-xs'>frozen</span>
        </button>
    )
})

const CompletedGoalsButton = observer(() => {
    return (
        <button
            title='Filter goals menu'
            onClick={toggleGoalsFilterModalVisibility}
            className='
            flex flex-[40%] cursor-pointer items-center justify-center 
            rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400'
        >
            <span className='text-xs'>completed</span>
        </button>
    )
})

const ActiveGoalsButton = observer(() => {
    return (
        <button
            title='Filter goals menu'
            onClick={toggleGoalsFilterModalVisibility}
            className='
            flex flex-[40%] cursor-pointer items-center justify-center 
            rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400'
        >
            <span className='text-xs'>active</span>
        </button>
    )
})
