import { IconDeleteTemp } from '@/assets/icons'
import { cn } from '@/helpers/cn'
import type { IAch } from '@/modules/achievements/services/types'

export const AchIsDeletedInfo: React.FC<{ ach: IAch; isMobile?: boolean }> = ({ ach, isMobile }) => {
    if (!ach.deleted_at) return null

    return <IconDeleteTemp className={cn('text-gray-500', isMobile ? 'w-9 h-9 mt-1' : 'w-4 h-4')} />
}
