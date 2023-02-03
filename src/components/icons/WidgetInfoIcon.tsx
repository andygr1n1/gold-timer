import { Icon } from '@iconify/react'

export const WidgetInfoIcon: React.FC<{ icon: string; bgColor: string; iconColor: string }> = ({
    icon,
    bgColor,
    iconColor,
}) => {
    return (
        <div
            className={`absolute -top-8 -left-8 z-10 flex items-center justify-center rounded-full p-4 shadow-lg shadow-black/30 ${bgColor}`}
        >
            <Icon icon={icon} className={iconColor} width={35} height={35} />
        </div>
    )
}
