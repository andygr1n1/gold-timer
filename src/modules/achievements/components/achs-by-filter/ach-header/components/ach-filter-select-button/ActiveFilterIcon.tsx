import { IconDeleteTemp, IconFavorite } from '@/assets/icons'
import { IconFocus } from '@/assets/icons/IconFocus'
import { useGetAchParamsFilter } from './useGetAchParamsFilter'
import { IconAll } from '@/assets/icons/IconAll'

export const ActiveFilterIcon: React.FC = () => {
    const { isAll, isActive, isFavorite, isDeleted } = useGetAchParamsFilter()

    let icon = <IconFocus width={24} height={24} className='min-h-[24px] min-w-[24px]' />

    if (isAll) icon = <IconAll width={24} height={24} className='min-h-[24px] min-w-[24px] text-sky-400' />
    if (isActive) icon = <IconFocus width={24} height={24} className='min-h-[24px] min-w-[24px]' />
    if (isFavorite) icon = <IconFavorite width={24} height={24} className='min-h-[24px] min-w-[24px] text-rose-600' />
    if (isDeleted) icon = <IconDeleteTemp width={24} height={24} className='min-h-[24px] min-w-[24px] text-slate-600' />
    return icon
}
