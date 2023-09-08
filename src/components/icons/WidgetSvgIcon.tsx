export const WidgetSvgIcon: React.FC<{
    icon: string
    onClick?: () => void
}> = ({ icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute -left-2 -top-6 z-10 flex items-center justify-center xl:-left-8 xl:-top-6`}
        >
            <img src={icon} width={60} height={60} />
        </button>
    )
}
