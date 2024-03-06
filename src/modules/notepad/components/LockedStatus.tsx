import { IconUnlocked } from '@/assets/icons'
import { IconLocked } from '@/assets/icons/IconLocked'
import { useFetchLockedStatus } from '../service/useFetchLockedStatus'
import { useMutateLockedStatus } from '../service/useMutateLockedStatus'

export const LockedStatus: React.FC = () => {
    const { isLocked, isLoading } = useFetchLockedStatus()

    const toggleLockedStatus = useMutateLockedStatus()

    if (isLoading) return null
    return (
        <div className='absolute right-5 top-6 '>
            {isLocked ? (
                <button
                    type='button'
                    className='cursor-pointer'
                    onClick={() => toggleLockedStatus.mutate({ locked: false })}
                >
                    <IconLocked className='text-cText opacity-70 cursor-pointer z-10 hover:text-blue-700 ' />
                </button>
            ) : (
                <button
                    type='button'
                    className='cursor-pointer hover:text-blue-700 '
                    onClick={() => toggleLockedStatus.mutate({ locked: true })}
                >
                    <IconUnlocked className='text-cText relative opacity-70 hover:text-blue-700 z-10' />
                </button>
            )}
        </div>
    )
}
