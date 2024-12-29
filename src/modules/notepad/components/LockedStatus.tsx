import { IconLocked, IconUnlocked } from '@/assets/icons'

export const LockedStatus: React.FC<{ isLocked: boolean; onClick: () => void }> = ({ isLocked, onClick }) => {
    return (
        <button type='button' data-testid='toggle-lock' className='h-[36px]' onClick={onClick}>
            {isLocked ? (
                <IconLocked className='text-cText opacity-40 w-[18px] h-[18px] cursor-pointer duration-300 z-10 hover:text-blue-700 ' />
            ) : (
                <IconUnlocked className='text-cText opacity-40 w-[18px] h-[18px] cursor-pointer duration-300 hover:text-blue-700 z-10' />
            )}
        </button>
    )
}
