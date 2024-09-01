import { IconCrystal } from '@/assets/icons'
import { useFetchUserDetails } from '../../modules/goals/shared-service/fetch-user-details/useFetchUserDetails'
import { useUser$ } from '@/services/user-store/userUser.store'
import { IconLotus } from '@/assets/icons/IconLotus'

export const UserCoins: React.FC = () => {
    const { userId } = useUser$()
    const { isLoading, coins, ritualPower } = useFetchUserDetails({ userId })
    return !isLoading ? (
        <div data-testid='userCoins' className='flex items-start justify-start gap-5'>
            <div className='pointer-events-none flex items-center justify-center gap-2'>
                <IconLotus className='text-pink-500' width={26} height={26} />
                <span className='font-kzen text-cText font-bold text-base h-40px'>{coins}</span>
            </div>
            <div className='pointer-events-none flex cursor-pointer items-center gap-2'>
                <IconCrystal width={24} height={24} className='text-[#61d345]' />
                <div className='font-kzen text-cText font-bold text-base'>{ritualPower}</div>
            </div>
        </div>
    ) : null
}
