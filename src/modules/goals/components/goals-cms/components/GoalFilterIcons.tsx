import { IconExpired, IconFavorite, IconFocus, IconRitual } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import {
    isFilterStateExpired,
    isFilterStateRitualized,
    isFilterStateFavorite,
} from '@/modules/goals/helpers/goalsGuards'

export const GoalFilterIcons = ({}) => {
    const state = 'active'
    let icon = <IconFocus width={76} height={76} className='min-h-[66px] min-w-[66px] text-blue-600' />

    if (isFilterStateExpired(state))
        icon = <IconExpired width={65} height={65} className='min-h-[65px] min-w-[65px] text-amber-600' />
    if (isFilterStateRitualized(state))
        icon = <IconRitual width={75} height={75} className='min-h-[65px] min-w-[65px] text-teal-600' />
    if (isFilterStateFavorite(state))
        icon = <IconFavorite width={70} height={70} className='min-h-[70px] min-w-[70px] text-rose-600' />
    return <StyledButton variant='text' className='absolute-center !h-24 !w-24 !rounded-full ' startIcon={icon} />
}
