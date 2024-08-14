import { IconCrystal } from '@/assets/icons'
import { useFetchUserDetails } from '../../modules/goals/shared-service/fetch-user-details/useFetchUserDetails'
import { IconLighting } from '@/assets/icons/IconLighting'
import { useUser$ } from '@/services/user-store/userUser.store'

export const UserCoins: React.FC = () => {
    const { userId } = useUser$()
    const { isLoading, coins, ritualPower } = useFetchUserDetails({ userId })
    return !isLoading ? (
        <div data-testid='userCoins' className='flex items-start justify-start gap-5'>
            <div className='pointer-events-none flex items-center justify-center gap-2'>
                <IconLighting className='text-amber-500' width={24} height={24} />
                <span className='font-kzen text-amber-500 font-bold text-base h-40px'>{coins}</span>
            </div>
            <div className='pointer-events-none flex cursor-pointer items-center gap-2'>
                <IconCrystal width={24} height={24} className='text-teal-600' />
                <div className='font-kzen text-teal-600 font-bold text-base'>{ritualPower}</div>
            </div>
        </div>
    ) : null
}
