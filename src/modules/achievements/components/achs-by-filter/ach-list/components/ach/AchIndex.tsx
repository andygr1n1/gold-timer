import type { MEDIA_QUERY_VALUES_ENUM } from '@/hooks/useMatchMedia.hook'
import { type IAch } from '@/modules/achievements/services/types'
import { lazy, Suspense } from 'react'

const AchMobile = lazy(() => import('./ach-mobile/AchMobile'))
const AchDefault = lazy(() => import('./ach-default/AchDefault'))

export const AchIndex: React.FC<{ ach: IAch; isMobile: MEDIA_QUERY_VALUES_ENUM }> = ({ ach, isMobile }) => {
    return isMobile ? (
        <Suspense fallback={null}>
            <AchMobile ach={ach} />
        </Suspense>
    ) : (
        <Suspense fallback={null}>
            <AchDefault ach={ach} />
        </Suspense>
    )
}
