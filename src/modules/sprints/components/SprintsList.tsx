import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { SprintInfo } from './sprint-info'
import { SprintMenuDialogConfirm } from './sprint-info/SprintMenuDialogConfirm'

export const SprintsList: React.FC = observer(() => {
    const { fetchSprints } = useSprintsStore()

    useEffect(() => {
        fetchSprints()
    }, [])

    return (
        <>
            <div className='bg-global-bg flex h-full   w-[calc(100%-40px)] flex-col items-start justify-start gap-5 rounded-md p-5  '>
                <ActiveSprintsList />
                <FreezedSprintsList />
                <CheckedSprintsList />
                <FutureSprintsList />
                <CompletedSprintsList />
            </div>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <SprintMenuDialogConfirm />
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

const CompletedSprintsList: React.FC = observer(() => {
    const { completedSprintsRender } = useSprintsStore()
    return (
        <>
            {completedSprintsRender.map((sprint) => (
                <SprintInfo key={sprint.id} sprint={sprint} />
            ))}
        </>
    )
})
