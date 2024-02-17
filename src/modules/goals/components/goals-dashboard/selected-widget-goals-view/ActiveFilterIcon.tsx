import { StyledButton } from '@/components/buttons/StyledButton'
import { ActiveIcon, ExpiredIcon, FavoriteIcon, RitualIcon } from '../components/Icons'
import {
    isFilterStateExpired,
    isFilterStateRitualized,
    isFilterStateFavorite,
} from '@/modules/goals/helpers/goalsGuards'
import { IGoalQueryTypeFilter } from '@/modules/goals/interfaces/types'

export const ActiveFilterIcon: React.FC<{ state: IGoalQueryTypeFilter }> = ({ state }) => {
    let icon = <ActiveIcon />
    if (isFilterStateExpired(state)) icon = <ExpiredIcon />
    if (isFilterStateRitualized(state)) icon = <RitualIcon />
    if (isFilterStateFavorite(state)) icon = <FavoriteIcon />
    return <StyledButton variant='text' className='absolute-center !h-24 !w-24 !rounded-full ' startIcon={icon} />
}
