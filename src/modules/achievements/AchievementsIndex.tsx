import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { AchievementsList } from './AchievementsList'

const AchievementsIndex: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.ACHIEVEMENTS}>
            <AchievementsList />
        </ModuleWrapper>
    )
}

export default AchievementsIndex
