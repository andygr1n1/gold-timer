import { IconDeleteTemp, IconFavorite, IconRitual } from '@/assets/icons'
import { useGetGoalsParamsFilter } from '../../../shared-hooks/useGetGoalsParamsFilter'
import { IconExpired } from '@/assets/icons/IconExpired'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconCompleted } from '@/assets/icons/IconCompleted'
import { IconAll } from '@/assets/icons/IconAll'

export const ActiveFilterIcon: React.FC = () => {
    const { isExpired, isFavorite, isDeleted, isCompleted, isRitualized, isAll } = useGetGoalsParamsFilter()

    let icon = <IconFocus width={24} height={24} className='min-h-[24px] min-w-[24px]' />
    if (isAll) icon = <IconAll width={24} height={24} className='min-h-[24px] min-w-[24px] text-sky-400' />
    if (isExpired) icon = <IconExpired width={24} height={24} className='min-h-[24px] min-w-[24px] text-amber-600' />
    if (isRitualized) icon = <IconRitual width={24} height={24} className='min-h-[24px] min-w-[24px] text-teal-600' />
    if (isFavorite) icon = <IconFavorite width={24} height={24} className='min-h-[24px] min-w-[24px] text-rose-600' />
    if (isCompleted)
        icon = <IconCompleted width={24} height={24} className='min-h-[24px] min-w-[24px] text-violet-600' />
    if (isDeleted) icon = <IconDeleteTemp width={24} height={24} className='min-h-[24px] min-w-[24px] text-slate-600' />
    return icon
}
