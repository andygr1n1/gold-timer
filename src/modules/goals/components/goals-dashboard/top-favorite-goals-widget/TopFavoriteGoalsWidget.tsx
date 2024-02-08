import styles from '../TopGoalsWidgets.module.scss'
import { TopGoal } from '../components/TopGoal'
import { StyledButton } from '@/components/buttons/StyledButton'
import { FavoriteIcon } from '../components/Icons'
import { useFetchGoalsByFilter } from '@/modules/goals/service'
import { useNavigate } from 'react-router-dom'

export const TopFavoriteGoalsWidget: React.FC = () => {
    const navigate = useNavigate()

    const {
        data: { favoriteGoals },
    } = useFetchGoalsByFilter({ queryFilter: 'all' })

    return (
        <div key={favoriteGoals.length} className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-39px] top-[-44px]  cursor-pointer'>
                    <StyledButton
                        onClick={() => {
                            navigate(
                                { pathname: '/dashboard/filtered-goals', search: `?filter=favorite` },
                                { state: { filter: 'favorite' } },
                            )
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={<FavoriteIcon />}
                    />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {favoriteGoals.map((goal) => (
                        <TopGoal key={goal.id} goal={goal} />
                    ))}
                </div>
            </div>
        </div>
    )
}
