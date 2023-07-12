import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { NewSprintButton } from './components/ new-sprint-button/NewSprintButton'
import { NewSprintDialog } from './components/new-sprint-dialog/NewSprintDialog'

export const SprintsIndex: React.FC = () => {
    return (
        <ModuleWrapper title={'Sprints'}>
            <NewSprintButton />
            <NewSprintDialog />
        </ModuleWrapper>
    )
}
