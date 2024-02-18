import { ModuleWrapper } from '@/components/ModuleWrapper'
import { SprintsList } from './components/SprintsList'
import { SprintsFilters } from './components/filters/SprintsFilters'

import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { SprintMenuDialogConfirm } from './components/sprint-info/SprintMenuDialogConfirm'
import { useSprintsStore } from '@/StoreProvider'
import { APP_ROUTES_ENUM } from '@/lib/enums'
import { SearchSprintsInput } from '@/modules/sprints/components/SearchSprintsInput'
import sprintsImage from '@/assets/sprints-plan-1.png'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { StyledButton } from '@/components/buttons/StyledButton'
import { CreateEditSprintDialog } from './components/create-edit-sprint/CreateEditSprintDialog'
import { IconSunny } from '@/assets/icons/IconSunny'

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
                <>
                    <StyledButton
                        variant='text'
                        size='small'
                        onClick={() => {
                            activateNewSprintCreator()
                        }}
                        className='opacity-70 hover:opacity-100'
                        startIcon={<IconSunny width={24} height={24} />}
                    >
                        New sprint
                    </StyledButton>
                    <CreateEditSprintDialog />
                </>
            }
        >
            <div className='mb-5 flex flex-wrap justify-start gap-8'>
                {!isMobile && sprints.length && (
                    <div className='mt-5 flex justify-between'>
                        <SprintsFilters />
                        <div className='w-full max-w-lg'>
                            <SearchSprintsInput />
                        </div>
                    </div>
                )}
                {sprints.length ? (
                    <>
                        <SprintsList />
                    </>
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
