import { IconUnlocked } from '@/assets/icons'
import { IconLocked } from '@/assets/icons/IconLocked'

export const LockedStatus: React.FC<{ isLocked: boolean; onClick: (status: boolean) => void }> = ({
    isLocked,
    onClick,
}) => {
    return (
        <div className='absolute right-5 top-6 '>
            <button data-testid='toggle-lock' type='button' onClick={() => onClick(!isLocked)}>
                {isLocked ? (
                    <IconLocked className='text-cText opacity-70 cursor-pointer z-10 hover:text-blue-700 ' />
                ) : (
                    <IconUnlocked className='text-cText opacity-70 cursor-pointer hover:text-blue-700 z-10' />
                )}
            </button>
        </div>
    )
}
