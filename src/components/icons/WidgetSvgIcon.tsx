export const WidgetSvgIcon: React.FC<{
    icon: string
    onClick?: () => void
}> = ({ icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute -left-2 -top-6 z-10 flex cursor-pointer items-center justify-center opacity-70 hover:opacity-95 xl:-left-8 xl:-top-5`}
        >
            <img src={icon} width={50} height={50} />
        </button>
    )
}
