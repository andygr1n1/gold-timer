import { Icon } from '@iconify/react'

export const WidgetInfoIcon: React.FC<{ icon: string; bgColor: string; iconColor: string; onClick?: () => void }> = ({
    icon,
    bgColor,
    iconColor,
    onClick,
}) => {
    return (
        <div
            className={`absolute -top-6 -left-3 z-10 flex items-center justify-center rounded-full p-2 shadow-lg shadow-black/30 xl:-top-8 xl:-left-8 xl:p-4 ${bgColor}`}
        >
            <Icon icon={icon} className={iconColor} width={35} height={35} onClick={onClick} />
        </div>
    )
}
