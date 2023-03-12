import { useTasksStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Task } from './compoents/Task'

export const TasksWidget: React.FC = observer(() => {
    const { tasks, fetchTasks } = useTasksStore()

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div>
            {tasks.map((t) => (
                <Task key={t.id} t={t} />
            ))}
        </div>
    )
})
