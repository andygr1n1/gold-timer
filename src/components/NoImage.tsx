import { IconLandscape } from '@/assets/icons/IconLandscape'
import { cn } from '@/helpers/cn'

export const NoImage: React.FC<{ className?: string; iconClassName?: string }> = ({
    className = '',
    iconClassName = '',
}) => {
    return (
        <div
            className={cn(
                'h-32 w-32 items-center justify-center flex border-solid rounded-md border-[0.5px] border-global-bg-regal bg-global-bg-plasma',
                className,
            )}
        >
            <IconLandscape className={cn('text-cText opacity-50 w-20 h-20', iconClassName)} />
        </div>
    )
}
