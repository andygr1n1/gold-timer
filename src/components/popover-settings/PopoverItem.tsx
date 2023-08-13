import { Icon } from '@iconify/react'

export const PopoverItem: React.FC<{
    action: () => void
    icon: string
    title: string
    className?: string
    iconClassName?: string
    width?: number
    height?: number
}> = ({ action, icon, title, iconClassName = '', className = '', width, height }) => {
    return (
        <div className={`group mr-3 flex cursor-pointer items-center gap-2 ${className}`} onClick={action}>
            <Icon icon={icon} className={iconClassName} width={width || 16} height={height || 16} />
            <span className=''>{title}</span>
        </div>
    )
}
