import { IconArchive } from '@/assets/icons/IconArchive'
import { cn } from '@/helpers/cn'
import type { IAch } from '@/modules/achievements/services/types'

export const AchIsArchivedInfo: React.FC<{ ach: IAch; isMobile?: boolean }> = ({ ach, isMobile }) => {
    if (!ach.archived) return null

    return <IconArchive className={cn('text-violet-500', isMobile ? 'w-9 h-9' : 'w-6 h-6')} />
}
