import { Icon } from '@iconify/react'

export const WidgetInfoIcon: React.FC<{
    icon: string
    bgColor: string
    iconColor: string
    onClick?: () => void
    disabled?: boolean
}> = ({ icon, bgColor, iconColor, onClick, disabled = false }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`absolute -left-3 -top-6 z-10 flex items-center justify-center rounded-full p-2 shadow-lg shadow-black/30 xl:-left-8 xl:-top-8 xl:p-4 ${bgColor}`}
        >
            <Icon icon={icon} className={iconColor} width={35} height={35} />
        </button>
    )
}
