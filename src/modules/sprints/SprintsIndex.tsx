// import { ModuleWrapper } from '@/components/ModuleWrapper'
// import { SprintsList } from './components/SprintsList'
// import { SprintsFilters } from './components/filters/SprintsFilters'

// import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
// import { SprintMenuDialogConfirm } from './components/sprint-info/SprintMenuDialogConfirm'
// import { useSprintsStore } from '@/modules/app/mst/StoreProvider'
// import { APP_ROUTES_ENUM } from '@/services/enums'
// import { SearchSprintsInput } from '@/modules/sprints/components/SearchSprintsInput'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { observer } from 'mobx-react-lite'
// import { ArtifactsCounter } from '../dashboard/components/artifacts-counter/ArtifactsCounter'

const SprintsIndex: React.FC = observer(() => {
    // const { isMobile } = useWindowMatchMedia(['isMobile'])
    // const { sprints } = useSprintsStore()

    return (
        <ModuleWrapper>
            <div className='mb-5 flex w-full flex-wrap justify-start gap-8'>
                <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'></div>

                {/* {!isMobile && !!sprints.length && (
                        <div className='mt-5 flex justify-between'>
                            <SprintsFilters />
                            <div className='w-full max-w-lg'>
                                <SearchSprintsInput />
                            </div>
                        </div>
                    )}
                    <SprintsList /> */}
            </div>
        </ModuleWrapper>
    )
})

export default SprintsIndex
