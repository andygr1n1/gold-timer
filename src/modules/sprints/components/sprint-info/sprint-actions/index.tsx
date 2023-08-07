import { ISprint$ } from '@/mst/types'
import { FreezedCreateNewInstance } from './FreezedCreateNewInstance'
import { observer } from 'mobx-react-lite'
import { CheckActiveDay } from './CheckActiveDay'
import { Future } from './Future'
import { Finished } from './Finished'

export const SprintActions: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { isStatusFreezed, focusSprintDay, isStatusActive, isStatusFuture } = sprint
    if (!focusSprintDay) return null
    if (isStatusFreezed) return <FreezedCreateNewInstance sprint={sprint} />
    if (isStatusActive) return <CheckActiveDay sprint={sprint} />
    if (isStatusFuture) return <Future sprint={sprint} />
    return <Finished sprint={sprint} />
})
