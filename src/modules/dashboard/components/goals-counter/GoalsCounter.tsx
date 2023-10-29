import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const GoalsCounter: React.FC = observer(() => {
    const {
        notes$: { notesLength, openNoteCreateMode },
        sprints$: { allActiveCheckedSprintsLength, activateNewSprintCreator },
        goals$: { notCompletedGoalsCount: activeGoalsCount, openCreateMode },
    } = useRootStore()

    return (
        <div className='mt-10 flex  w-full flex-wrap items-center justify-center gap-5 xl:mt-0 xl:gap-20  '>
            <div className={clsx('relative flex text-xl', !activeGoalsCount && 'opacity-70')}>
                <span className='text-cText absolute -bottom-6 -right-4 font-bold'>{activeGoalsCount || ''}</span>
                <Icon
                    onClick={() => openCreateMode()}
                    icon='octicon:goal-16'
                    width={70}
                    height={70}
                    className='text-cText  cursor-pointer duration-300 hover:text-blue-600'
                />
            </div>
            <div className={clsx('relative flex text-xl', !allActiveCheckedSprintsLength && 'opacity-70')}>
                <span className={clsx('text-cText absolute -bottom-6 -right-2 font-bold')}>
                    {allActiveCheckedSprintsLength || ''}
                </span>
                <Icon
                    onClick={() => activateNewSprintCreator()}
                    icon='game-icons:sprint'
                    width={70}
                    height={70}
                    className='text-cText cursor-pointer duration-300 hover:text-blue-600'
                />
            </div>
            <div className={clsx('relative flex text-xl', !notesLength && 'opacity-70')}>
                <span className='text-cText absolute -bottom-6 right-0 font-bold'>{notesLength || ''}</span>
                <Icon
                    onClick={() => openNoteCreateMode()}
                    icon='ci:note-edit'
                    width={70}
                    height={70}
                    className='text-cText  cursor-pointer duration-300 hover:text-blue-600'
                />
            </div>
        </div>
    )
})
