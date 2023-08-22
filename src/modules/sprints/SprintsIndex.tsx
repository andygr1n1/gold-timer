import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { SprintsList } from './components/SprintsList'
import { SprintsFilters } from './components/filters/SprintsFilters'

import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { NewSprintDialog } from './components/new-sprint-dialog/NewSprintDialog'
import { SprintMenuDialogConfirm } from './components/sprint-info/SprintMenuDialogConfirm'
import { NewSprintButton } from './components/ new-sprint-button/NewSprintButton'

export const SprintsIndex: React.FC = () => {
    const { isMobile } = useWindowMatchMedia(['isMobile'])

    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-5'>
                {!isMobile && (
                    <div className='mt-5 flex justify-between'>
                        <SprintsFilters />
                        <NewSprintButton />
                    </div>
                )}
                <SprintsList />
            </div>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <NewSprintDialog />
            <SprintMenuDialogConfirm />
        </ModuleWrapper>
    )
}
