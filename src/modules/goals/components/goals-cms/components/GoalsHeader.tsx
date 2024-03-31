import { AddGoal } from './AddGoal'
import { GoalsFilterSelect } from './GoalsFilterSelect'
import { SearchGoalsInput } from './SearchGoalsInput'

export const GoalsHeader: React.FC = () => {
    return (
        <div className='flex w-full mx-auto gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <AddGoal />
                <div className='flex w-full items-center justify-end gap-2'>
                    <SearchGoalsInput />
                    <div className='flex gap-2 w-[108px]'>
                        <GoalsFilterSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}
