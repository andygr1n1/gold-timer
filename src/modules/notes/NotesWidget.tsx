import { useTasksStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Note } from './components/Note'

export const NotesWidget: React.FC = observer(() => {
    const { tasks, fetchNotes: fetchTasks } = useTasksStore()

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div>
            {tasks.map((t) => (
                <Note key={t.id} t={t} />
            ))}
        </div>
    )
})
