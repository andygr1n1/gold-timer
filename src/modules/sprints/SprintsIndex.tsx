import { ModuleWrapper } from '@/components/ModuleWrapper'
import { SprintsList } from './components/SprintsList'
import { SprintsFilters } from './components/filters/SprintsFilters'

import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { SprintMenuDialogConfirm } from './components/sprint-info/SprintMenuDialogConfirm'
import { useSprintsStore } from '@/StoreProvider'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { SearchSprintsInput } from '@/modules/sprints/components/SearchSprintsInput'
import { SprintsSettingsIcon } from './components/SprintsSettingsIcon'
import sprintsImage from '@/assets/sprints-plan-1.png'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { StyledButton } from '@/components/buttons/StyledButton'

export const SprintsIndex: React.FC = observer(() => {
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const { openSprintCreateMode: activateNewSprintCreator, sprints, fetchSprints } = useSprintsStore()

    useEffect(() => {
        fetchSprints()
    }, [])

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.SPRINTS}
            topBarNodes={
                <div className='flex w-full items-center justify-center gap-4  xl:px-20'>
                    <SearchSprintsInput />
                    <SprintsSettingsIcon />
                </div>
            }
        >
            <div className='animate-opacity-5 flex h-full w-full flex-col gap-5 xl:w-[calc(100%-160px)] xl:px-20'>
                {!isMobile && (
                    <div className='mt-5 flex justify-between'>
                        <SprintsFilters />
                        <StyledButton variant='outlined' onClick={activateNewSprintCreator}>
                            + Add new sprint
                        </StyledButton>
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
