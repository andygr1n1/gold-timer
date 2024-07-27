import { ModuleWrapper } from '@/components/ModuleWrapper'
import { useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { IArtifactStatus } from '@/services/types'
import { AchList } from './ach-list/AchList'
import { AchHeader } from './ach-header/AchHeader'

const AchEditorDialog = lazy(() => import('@/modules/achievements/components-shared/ach-editor-dialog/AchEditorDialog'))

export const AchsByFilter: React.FC = () => {
    const location = useLocation()
    const queryFilter: IArtifactStatus = location.state?.filter

    return (
        <ModuleWrapper>
            <Suspense fallback={null}>
                <AchEditorDialog />
            </Suspense>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                <AchHeader />
                <AchList key={queryFilter} />
            </div>
        </ModuleWrapper>
    )
}
