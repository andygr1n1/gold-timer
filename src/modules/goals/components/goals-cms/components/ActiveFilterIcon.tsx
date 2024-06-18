import { IconCompleted, IconDeleteTemp, IconFavorite, IconFocus, IconRitual } from '@/assets/icons'
import { useGetGoalsParamsFilter } from '../../../hooks/useGetGoalsParamsFilter'
import { IconExpired } from '@/assets/icons/IconExpired'

export const ActiveFilterIcon: React.FC = () => {
    const { isExpired, isFavorite, isDeleted, isCompleted, isRitualized } = useGetGoalsParamsFilter()

    let icon = <IconFocus width={24} height={24} className='min-h-[24px] min-w-[24px]' />

    if (isExpired) icon = <IconExpired width={24} height={24} className='min-h-[24px] min-w-[24px] text-amber-600' />
    if (isRitualized) icon = <IconRitual width={24} height={24} className='min-h-[24px] min-w-[24px] text-teal-600' />
    if (isFavorite) icon = <IconFavorite width={24} height={24} className='min-h-[24px] min-w-[24px] text-rose-600' />
    if (isCompleted)
        icon = <IconCompleted width={24} height={24} className='min-h-[24px] min-w-[24px] text-violet-600' />
    if (isDeleted) icon = <IconDeleteTemp width={24} height={24} className='min-h-[24px] min-w-[24px] text-slate-600' />
    return icon
}
