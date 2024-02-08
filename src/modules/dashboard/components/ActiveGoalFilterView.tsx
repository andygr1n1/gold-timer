import { ModuleWrapper } from '@/components/ModuleWrapper'
import { ArtifactsCounter } from './artifacts-counter/ArtifactsCounter'
import { APP_ROUTES_ENUM } from '@/lib/enums'
import { useLocation } from 'react-router-dom'

export const ActiveGoalFilterView: React.FC = () => {
    const location = useLocation()
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD} topBarNodes={<ArtifactsCounter />}>
            <div>ActiveGoalFilterView</div>
            {JSON.stringify(location.state?.filter)}
        </ModuleWrapper>
    )
}
