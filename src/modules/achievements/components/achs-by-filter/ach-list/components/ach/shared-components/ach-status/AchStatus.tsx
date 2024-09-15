import type { IAch } from '@/modules/achievements/services/types'
import { AchIsArchivedInfo } from './components/AchIsArchivedInfo'
import { AchIsDeletedInfo } from './components/AchIsDeletedInfo'
import { AchIsFavoriteInfo } from './components/AchIsFavoriteInfo'
import { cn } from '@/helpers/cn'

export const AchStatus: React.FC<{ ach: IAch; isMobile?: boolean }> = ({ ach, isMobile }) => {
    return (
        <div className={cn('absolute flex', isMobile ? 'bottom-4 right-3 gap-3' : 'bottom-0 right-0 gap-2')}>
            <AchIsDeletedInfo ach={ach} isMobile={isMobile} />
            <AchIsArchivedInfo ach={ach} isMobile={isMobile} />
            <AchIsFavoriteInfo ach={ach} isMobile={isMobile} />
        </div>
    )
}
