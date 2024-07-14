import { useFetchUserDetails } from '../../modules/goals/shared-service/fetch-user-details/useFetchUserDetails'
import { IconAwardStar } from '@/assets/icons/IconAwardStar'
import { IconCrystal } from '@/assets/icons'
import { useUser$ } from '@/services/user-store/userUser.store'

export const UserCoins: React.FC = () => {
    const { userId } = useUser$()
    const { isLoading, coins, ritualPower } = useFetchUserDetails({ userId })
    return !isLoading ? (
        <div data-testid='userCoins' className='flex items-start justify-start gap-2 '>
            <div className='pointer-events-none flex items-center justify-center gap-1  '>
                <IconAwardStar className='text-rose-500' width={24} height={24} />
                <span className='font-kzen h-40px text-cText opacity-70 '>{coins}</span>
            </div>
            <div className='pointer-events-none flex cursor-pointer items-center gap-1'>
                <IconCrystal width={24} height={24} className='text-teal-600' />
                <div className=' font-kzen text-cText opacity-70 '>{ritualPower}</div>
            </div>
        </div>
    ) : null
}
