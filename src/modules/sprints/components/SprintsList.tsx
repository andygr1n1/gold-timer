import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { SprintInfo } from './sprint-info/SprintInfo'

export const SprintsList: React.FC = observer(() => {
    return (
        <>
            <div className='bg-global-bg mt-5 flex h-full w-full flex-col items-start justify-start gap-5 rounded-md '>
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
