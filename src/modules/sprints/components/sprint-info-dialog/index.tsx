import { observer } from 'mobx-react-lite'
import { SprintProgress } from './SprintProgress'
import { SprintImg } from './SprintImg'
import { SprintDay } from './SprintDay'
import { ISprint$ } from '../../mst/types'

export const SprintInfo: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { sprint_days, progress } = sprint
    if (!sprint_days) return null

    return (
        <div className='bg-global-2-bg relative mx-5 flex flex-row justify-between p-5'>
            {/* left */}
            <div>
                <div className='mb-10 ml-32 text-xl font-bold'>{sprint.title}</div>
                <div className='flex justify-between gap-5'>
                    <div className='flex flex-wrap gap-5'>
                        {sprint_days.map((sprintDay) => (
                            <SprintDay key={sprintDay.id} sprintDay={sprintDay} />
                        ))}
                    </div>
                    <SprintImg sprint={sprint} />
                </div>
            </div>
            {/* right  */}
            <SprintProgress progress={progress} />
        </div>
    )
})
