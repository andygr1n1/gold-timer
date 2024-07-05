import { IconUnlocked } from '@/assets/icons'
import { IconLocked } from '@/assets/icons/IconLocked'

export const LockedStatus: React.FC<{ isLocked: boolean; onClick: (status: boolean) => void }> = ({
    isLocked,
    onClick,
}) => {
    return (
        <button data-testid='toggle-lock' type='button' className='-mr-2' onClick={() => onClick(!isLocked)}>
            {isLocked ? (
                <IconLocked className='text-cText opacity-90 w-5 h-5 cursor-pointer duration-300 z-10 hover:text-blue-700 ' />
            ) : (
                <IconUnlocked className='text-cText opacity-100 w-5 h-5 cursor-pointer duration-300 hover:text-blue-700 z-10' />
            )}
        </button>
    )
}
