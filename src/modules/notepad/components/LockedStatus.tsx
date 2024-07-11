import { IconUnlocked } from '@/assets/icons'
import { IconLocked } from '@/assets/icons/IconLocked'

export const LockedStatus: React.FC<{ isLocked: boolean; onClick: (status: boolean) => void }> = ({
    isLocked,
    onClick,
}) => {
    return (
        <button
            type='button'
            data-testid='toggle-lock'
            className='h-[36px] flex items-start pt-1'
            onClick={() => onClick(!isLocked)}
        >
            {isLocked ? (
                <IconLocked className='text-cText opacity-90 w-[18px] h-[18px] cursor-pointer duration-300 z-10 hover:text-blue-700 ' />
            ) : (
                <IconUnlocked className='text-cText opacity-100 w-[18px] h-[18px] cursor-pointer duration-300 hover:text-blue-700 z-10' />
            )}
        </button>
    )
}
