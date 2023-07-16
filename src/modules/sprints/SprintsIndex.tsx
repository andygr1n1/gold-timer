import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { NewSprint } from './components/NewSprint'
import { SprintsList } from './components/SprintsList'

export const SprintsIndex: React.FC = () => {
    return (
        <ModuleWrapper title={'Sprints'}>
            <div className='flex flex-col gap-5 2xl:flex-row'>
                <NewSprint />
                <SprintsList />
            </div>
        </ModuleWrapper>
    )
}
