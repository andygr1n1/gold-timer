import { IconDeleteTemp, IconFavorite } from '@/assets/icons'
import { IconFocus } from '@/assets/icons/IconFocus'
import { useGetAchParamsFilter } from './useGetAchParamsFilter'
import { IconAll } from '@/assets/icons/IconAll'
import { IconArchive } from '@/assets/icons/IconArchive'

export const ActiveFilterIcon: React.FC = () => {
    const { isAll, isActive, isFavorite, isDeleted, isArchived } = useGetAchParamsFilter()

    let icon = <IconFocus width={24} height={24} className='min-h-[24px] min-w-[24px]' />

    if (isAll) icon = <IconAll width={24} height={24} className='min-h-[24px] min-w-[24px] text-sky-400' />
    if (isActive) icon = <IconFocus width={24} height={24} className='min-h-[24px] min-w-[24px]' />
    if (isFavorite) icon = <IconFavorite width={24} height={24} className='min-h-[24px] min-w-[24px] text-rose-600' />
    if (isDeleted) icon = <IconDeleteTemp width={24} height={24} className='min-h-[24px] min-w-[24px] text-slate-600' />
    if (isArchived) icon = <IconArchive width={24} height={24} className='min-h-[24px] min-w-[24px] text-violet-600' />
    return icon
}
