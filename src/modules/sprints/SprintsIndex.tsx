import { ModuleWrapper } from '@/components/ModuleWrapper'
import { SprintsList } from './components/SprintsList'
import { SprintsFilters } from './components/filters/SprintsFilters'

import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { SprintMenuDialogConfirm } from './components/sprint-info/SprintMenuDialogConfirm'
import { AddNew } from '@/components/buttons/AddNew.button'
import { useSprintsStore } from '@/StoreProvider'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { SearchSprintsInput } from '@/modules/sprints/components/SearchSprintsInput'
import { SprintsSettingsIcon } from './components/SprintsSettingsIcon'

export const SprintsIndex: React.FC = () => {
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const { activateNewSprintCreator } = useSprintsStore()

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.SPRINTS}
            topBarNodes={
                <div className='flex w-full items-center justify-center gap-4'>
                    <SearchSprintsInput />
                    <SprintsSettingsIcon />
                </div>
            }
        >
            <div className='flex flex-col gap-5'>
                {!isMobile && (
                    <div className='mt-5 flex justify-between'>
                        <SprintsFilters />
                        <AddNew title={'Add new sprint'} onClick={activateNewSprintCreator} />
                    </div>
                )}
                <SprintsList />
            </div>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <SprintMenuDialogConfirm />
        </ModuleWrapper>
    )
}
