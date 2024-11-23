import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { SideMenuLink } from './SideMenuLink'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { IconFavorite } from '@/assets/icons'

export const WeddingStoryAdminMenuLink = observer(() => {
    const { isSuperHero } = useRoot$()
    if (!isSuperHero) return null
    return (
        <SideMenuLink
            to={APP_ROUTES_ENUM.WEDDING_STORY_ADMIN}
            title='Wedding'
            icon={<IconFavorite width={24} height={24} />}
        />
    )
})
