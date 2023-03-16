import { TopBar } from '@/layout/topbar/Topbar'
import { TasksWidget } from '@/modules/tasks/TasksWidget'
import { observer } from 'mobx-react-lite'

export const TasksIndex: React.FC = observer(() => {
    return (
        <div className='my-5 mx-5 flex-auto overflow-auto rounded-lg bg-global-2-bg xl:ml-0 '>
            <TopBar />
            <div className='m-5 h-[calc(100%-150px)] w-[calc(100%-80px)] rounded-md  bg-white p-5 '>
                <TasksWidget />
            </div>
        </div>
    )
})