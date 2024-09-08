import { ModuleWrapper } from '@/components/ModuleWrapper'
import { useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { type IArtifactStatus } from '@/services/types'
import { AchList } from './ach-list/AchList'
import { AchHeader } from './ach-header/AchHeader'
import { achEditorDialog$, AchEditorDialog$Provider } from '../ach-editor-dialog/mst/provider'

const AchEditorDialog = lazy(() => import('@/modules/achievements/components/ach-editor-dialog/AchEditorDialog'))

export const AchsByFilter: React.FC = () => {
    const location = useLocation()
    const queryFilter: IArtifactStatus = location.state?.filter

    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                <AchEditorDialog$Provider store={achEditorDialog$}>
                    <Suspense fallback={null}>
                        <AchHeader />
                        <AchEditorDialog />
                    </Suspense>
                    <AchList key={queryFilter} />
                </AchEditorDialog$Provider>
            </div>
        </ModuleWrapper>
    )
}
