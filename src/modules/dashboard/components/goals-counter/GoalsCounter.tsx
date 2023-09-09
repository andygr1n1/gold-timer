import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const GoalsCounter: React.FC = observer(() => {
    const {
        notes$: { notesLength },
        sprints$: { allActiveCheckedSprintsLength },
        goals$: { notCompletedGoalsCount: activeGoalsCount },
    } = useRootStore()

    return (
        <div className='mt-10 flex w-full max-w-[380px] flex-wrap items-center justify-between xl:mt-0 xl:gap-10  '>
            <div className='bg-global-3-bg text-x-sky relative flex h-10 w-10 cursor-default items-center justify-center rounded-full p-5 text-xl'>
                <span>{activeGoalsCount}</span>
                <Icon icon='octicon:goal-16' width={45} height={45} className='absolute -top-7 opacity-70' />
            </div>
            <div className='bg-global-3-bg text-x-sky relative flex h-10 w-10 cursor-default items-center justify-center rounded-full   p-5 text-xl'>
                <span>{allActiveCheckedSprintsLength}</span>
                <Icon icon='game-icons:sprint' width={45} height={45} className='absolute -top-7 opacity-70 ' />
            </div>
            <div className='text-x-sky bg-global-3-bg relative flex h-10 w-10 cursor-default items-center justify-center  rounded-full p-5 text-xl'>
                <span>{notesLength}</span>
                <Icon
                    icon='fluent:task-list-square-ltr-16-filled'
                    width={45}
                    height={45}
                    className='absolute -top-7 opacity-70'
                />
            </div>
        </div>
    )
})
