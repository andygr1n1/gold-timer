import { toggleGoalsFilterModalVisibility } from '@/components/modals/goals-filter-modal/GoalsFilterModal'
import { useGoalsStore } from '@/StoreProvider'
import { toggleTasksModalVisibility } from '@/widgets-modals/tasks/TasksModal'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const GoalsActions: React.FC = observer(() => {
    return (
        <div className='flex h-[265px] w-[260px] flex-col gap-5 rounded-md bg-global-bg p-5'>
            <div className='flex h-[125px] gap-2'>
                <AllGoalsViewAction />
                <CreateNewGoalAction />
            </div>
            <div className='flex h-[125px] gap-2'>
                <DashboardTasksAction />
            </div>
        </div>
    )
})

const AllGoalsViewAction = observer(() => {
    return (
        <button
            disabled
            title='view all goals'
            onClick={toggleGoalsFilterModalVisibility}
            className='
            flex flex-auto cursor-pointer flex-col items-center justify-center 
            gap-2 rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400
            disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300'
        >
            <Icon icon='bxs:dashboard' height={25} width={25} />
            <span className='font-mono font-bold'>Goals</span>
        </button>
    )
})

const CreateNewGoalAction = observer(() => {
    const { goCreateNewGoalMode } = useGoalsStore()

    return (
        <button
            title='create new goal'
            onClick={goCreateNewGoalMode}
            className='
            flex w-[60px] cursor-pointer flex-col items-center 
            justify-center gap-2 rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400'
        >
            <Icon icon='ic:round-dashboard-customize' width={25} height={25} className='mb-6' />
        </button>
    )
})

const DashboardTasksAction = observer(() => {
    return (
        <button
            title='open tasks menu'
            onClick={toggleTasksModalVisibility}
            className='
            flex flex-[40%] cursor-pointer flex-col items-center 
            justify-center gap-2 rounded-lg bg-navlink text-gray-700 shadow-lg shadow-black/30 hover:bg-navlink-active hover:text-amber-400
            disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300'
        >
            <Icon icon='fluent:task-list-square-settings-20-filled' height={27} width={27} />
            <span className='font-mono font-bold'>Tasks</span>
        </button>
    )
})
