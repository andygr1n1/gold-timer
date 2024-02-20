export const PopoverItem: React.FC<{
    action: () => void
    title: string
    className?: string
    width?: number
    height?: number
}> = ({ action, title, className = '' }) => {
    return (
        <div className={`group mr-3 flex cursor-pointer items-center gap-2 ${className}`} onClick={action}>
            <span className=''>{title}</span>
        </div>
    )
}
