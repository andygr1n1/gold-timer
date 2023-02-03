import { toggleGoalsFilterModalVisibility } from '@/components/modals/goals-filter-modal/GoalsFilterModal'
import { toggleTasksModalVisibility } from '@/components/modals/tasks-modal/TasksModal'
import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const GoalsActions: React.FC = observer(() => {
    return (
        <div className='flex h-[260px] w-[260px] flex-wrap justify-end gap-5 rounded-md bg-global-bg p-5'>
            <CreateNewGoalAction />
            <FilterGoalsAction />
            <DashboardTasksAction />
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
            <Icon icon='ic:round-dashboard-customize' width={25} height={25} />
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
            <Icon icon='mdi:filter-cog' height={25} width={25} />
        </button>
    )
})

const DashboardTasksAction = observer(() => {
    return (
        <button
            title='open tasks menu'
            onClick={toggleTasksModalVisibility}
            className='
            flex flex-[40%] cursor-pointer items-center justify-center 
            gap-5 rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400'
        >
            <Icon icon='fluent:task-list-square-settings-20-filled' height={27} width={27} />
            <span className='font-mono font-bold'>Tasks</span>
        </button>
    )
})
