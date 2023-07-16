import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { SprintInfo } from './sprint-info'

export const SprintsList: React.FC = observer(() => {
    const { fetchSprints, sprints } = useSprintsStore()
    useEffect(() => {
        fetchSprints()
    }, [])

    return (
        <div className='flex h-full w-full flex-col gap-20 rounded-md bg-global-bg py-20 2xl:h-[calc(100vh-360px)] 2xl:overflow-auto'>
            {sprints.map((sprint) => (
                <SprintInfo key={sprint.id} sprint={sprint} />
            ))}
        </div>
    )
})
