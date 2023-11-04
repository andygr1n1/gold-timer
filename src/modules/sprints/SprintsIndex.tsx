import { ModuleWrapper } from '@/components/ModuleWrapper'
import { SprintsList } from './components/SprintsList'
import { SprintsFilters } from './components/filters/SprintsFilters'

import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { SprintMenuDialogConfirm } from './components/sprint-info/SprintMenuDialogConfirm'
import { AddNew } from '@/components/buttons/AddNew.button'
import { useSprintsStore } from '@/StoreProvider'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { SearchSprintsInput } from '@/modules/sprints/components/SearchSprintsInput'
import { SprintsSettingsIcon } from './components/SprintsSettingsIcon'
import sprintsImage from '@/assets/sprints-plan-1.png'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

export const SprintsIndex: React.FC = observer(() => {
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const { activateNewSprintCreator, sprints, fetchSprints } = useSprintsStore()

    useEffect(() => {
        fetchSprints()
    }, [])

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
                {sprints.length ? (
                    <SprintsList />
                ) : (
                    <img
                        className='absolute-center pointer-events-none h-[250px] w-[250px] opacity-10'
                        src={sprintsImage}
                    />
                )}
            </div>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <SprintMenuDialogConfirm />
        </ModuleWrapper>
    )
})
