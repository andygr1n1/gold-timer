import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { SprintInfo } from './sprint-info/SprintInfo'
import { SprintMenuDialogConfirm } from './sprint-info/SprintMenuDialogConfirm'

export const SprintsList: React.FC = observer(() => {
    const { fetchSprints } = useSprintsStore()

    useEffect(() => {
        fetchSprints()
    }, [])

    return (
        <>
            <div className='bg-global-bg mt-5 flex h-full flex-col items-start justify-start gap-5 rounded-md md:mt-0 '>
                <ActiveSprintsList />
                <FreezedSprintsList />
                <CheckedSprintsList />
                <FutureSprintsList />
                <FinishedSprintsList />
            </div>
        </>
    )
})

const ActiveSprintsList: React.FC = observer(() => {
    const { activeSprintsRender } = useSprintsStore()
    return (
        <>
            {activeSprintsRender.map((sprint) => (
                <SprintInfo key={sprint.id} sprint={sprint} />
            ))}
        </>
    )
})

const FreezedSprintsList: React.FC = observer(() => {
    const { freezedSprintsRender } = useSprintsStore()
    return (
        <>
            {freezedSprintsRender.map((sprint) => (
                <SprintInfo key={sprint.id} sprint={sprint} />
            ))}
        </>
    )
})

const CheckedSprintsList: React.FC = observer(() => {
    const { checkedSprintsRender } = useSprintsStore()
    return (
        <>
            {checkedSprintsRender.map((sprint) => (
                <SprintInfo key={sprint.id} sprint={sprint} />
            ))}
        </>
    )
})

const FutureSprintsList: React.FC = observer(() => {
    const { futureSprintsRender } = useSprintsStore()
    return (
        <>
            {futureSprintsRender.map((sprint) => (
                <SprintInfo key={sprint.id} sprint={sprint} />
            ))}
        </>
    )
})

const FinishedSprintsList: React.FC = observer(() => {
    const { finishedSprintsRender } = useSprintsStore()
    return (
        <>
            {finishedSprintsRender.map((sprint) => (
                <SprintInfo key={sprint.id} sprint={sprint} />
            ))}
        </>
    )
})
