import { IconFavorite } from '@/assets/icons'
import { cn } from '@/helpers/cn'
import type { IAch } from '@/modules/achievements/services/types'

export const AchIsFavoriteInfo: React.FC<{ ach: IAch; isMobile?: boolean }> = ({ ach, isMobile }) => {
    if (!ach.is_favorite) return null

    return <IconFavorite className={cn('text-red-500', isMobile ? 'w-9 h-9' : 'w-4 h-4')} />
}
