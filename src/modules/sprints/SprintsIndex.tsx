import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { NewSprint } from './components/NewSprint'
import { SprintsList } from './components/SprintsList'
import { observer } from 'mobx-react-lite'
import { useSprintsStore } from '@/StoreProvider'

export const SprintsIndex: React.FC = observer(() => {
    const { sprintsStatusRender } = useSprintsStore()
    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-5'>
                <div className='mt-5 flex justify-between'>
                    <div className='flex gap-5'>
                        {sprintsStatusRender.map((status, i) => (
                            <button
                                key={status}
                                className={` cursor-pointer text-sm capitalize duration-300 ${
                                    i === 0
                                        ? 'bg-x-sky-darker hover:bg-x-sky rounded-md px-6 py-2 text-white'
                                        : 'text-cText hover:text-x-sky'
                                }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                    <NewSprint />
                </div>
                <SprintsList />
            </div>
        </ModuleWrapper>
    )
})
