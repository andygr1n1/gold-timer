import { Icon } from '@iconify/react'

export const FavoriteIcon: React.FC = () => {
    return <Icon icon='line-md:heart' width={70} height={70} className='min-h-[70px] min-w-[70px] text-rose-600' />
}
export const ExpiredIcon: React.FC = () => {
    return (
        <Icon icon='line-md:alert-circle' width={65} height={65} className='min-h-[65px] min-w-[65px] text-amber-600' />
    )
}
export const RitualIcon: React.FC = () => {
    return (
        <Icon
            icon='line-md:backup-restore'
            width={75}
            height={75}
            className='min-h-[65px] min-w-[65px] text-teal-600'
        />
    )
}
export const ActiveIcon: React.FC = () => {
    return (
        <Icon icon='line-md:my-location' width={76} height={76} className='min-h-[66px] min-w-[66px] text-blue-600' />
    )
}
