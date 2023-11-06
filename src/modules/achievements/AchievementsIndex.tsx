import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'
import { AchievementsList } from './AchievementsList'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { useRootStore } from '@/StoreProvider'
import achievementImage from '@/assets/achievement-img-1.png'
import { useEffect } from 'react'

export const AchievementsIndex: React.FC = observer(() => {
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])
    const {
        achievements$: { visibleAchievements, fetchAchievements },
    } = useRootStore()

    useEffect(() => {
        fetchAchievements()
    }, [])

    return (
        <ModuleWrapper hideTopBar={!!isLargeDesktop} context={APP_ROUTES_ENUM.ACHIEVEMENTS}>
            {visibleAchievements.length ? (
                <AchievementsList />
            ) : (
                <img
                    className='absolute-center pointer-events-none h-[200px] w-[200px] opacity-10'
                    src={achievementImage}
                />
            )}
        </ModuleWrapper>
    )
})
