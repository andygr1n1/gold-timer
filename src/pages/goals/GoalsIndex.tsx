import { TopBar } from '@/layout/topBar/TopBar'
import { PageGoals } from '@/modules/goals/PageGoals'
import { observer } from 'mobx-react-lite'

export const GoalsIndex: React.FC = observer(() => {
    return (
        <div className='mx-5 my-5 flex-auto overflow-auto rounded-lg bg-global-2-bg xl:ml-0 '>
            <TopBar />
            <div className='m-5 h-[calc(100%-150px)] w-[calc(100%-80px)] overflow-auto  rounded-md bg-white p-5'>
                <PageGoals />
            </div>
        </div>
    )
})
