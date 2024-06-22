// import { ModuleWrapper } from '@/components/ModuleWrapper'
// import { SprintsList } from './components/SprintsList'
// import { SprintsFilters } from './components/filters/SprintsFilters'

// import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
// import { SprintMenuDialogConfirm } from './components/sprint-info/SprintMenuDialogConfirm'
// import { useSprintsStore } from '@/modules/app/mst/StoreProvider'
// import { APP_ROUTES_ENUM } from '@/services/enums'
// import { SearchSprintsInput } from '@/modules/sprints/components/SearchSprintsInput'
import { observer } from 'mobx-react-lite'
// import { ArtifactsCounter } from '../dashboard/components/artifacts-counter/ArtifactsCounter'

const SprintsIndex: React.FC = observer(() => {
    return null
    // const { isMobile } = useWindowMatchMedia(['isMobile'])
    // const { sprints } = useSprintsStore()

    // return (
    //     <ModuleWrapper context={APP_ROUTES_ENUM.SPRINTS} topBarNodes={<ArtifactsCounter />}>
    //         <div className='mb-5 flex w-full flex-wrap justify-start gap-8'>
    //             <div className='flex w-full flex-col gap-8'>
    //                 {!isMobile && !!sprints.length && (
    //                     <div className='mt-5 flex justify-between'>
    //                         <SprintsFilters />
    //                         <div className='w-full max-w-lg'>
    //                             <SearchSprintsInput />
    //                         </div>
    //                     </div>
    //                 )}
    //                 <SprintsList />
    //             </div>
    //         </div>
    //         {/*  */}
    //         {/* D I A L O G */}
    //         {/*  */}
    //         <SprintMenuDialogConfirm />
    //     </ModuleWrapper>
    // )
})

export default SprintsIndex
