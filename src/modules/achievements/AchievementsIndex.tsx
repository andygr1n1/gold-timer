import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { observer } from 'mobx-react-lite'
import { AchievementsList } from './AchievementsList'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

const AchievementsIndex: React.FC = observer(() => {
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])

    return (
        <ModuleWrapper hideTopBar={!!isLargeDesktop} context={APP_ROUTES_ENUM.ACHIEVEMENTS}>
            <AchievementsList />
        </ModuleWrapper>
    )
})

export default AchievementsIndex
