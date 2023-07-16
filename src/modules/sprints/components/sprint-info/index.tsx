import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { SprintProgress } from './SprintProgress'
import { SprintImg } from './SprintImg'
import { SprintDay } from './SprintDay'

export const SprintInfo: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { sprints_days, progress } = sprint

    return (
        <div className='relative mx-5 flex flex-row justify-between bg-global-2-bg p-5'>
            {/* left */}
            <div>
                <div className='mb-10 ml-32 text-xl font-bold'>{sprint.title}</div>
                <div className='flex justify-between gap-5'>
                    <div className='flex flex-wrap gap-5'>
                        {sprints_days.map((sprintDay) => (
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
