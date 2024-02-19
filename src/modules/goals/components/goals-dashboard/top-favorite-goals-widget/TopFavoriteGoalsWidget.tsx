import { IconFavorite } from '@/assets/icons/IconFavorite'
import styles from '../TopGoalsWidgets.module.scss'
import { TopGoal } from '../components/TopGoal'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useFetchGoalsByFilter } from '@/modules/goals/service'
import { useNavigate } from 'react-router-dom'

export const TopFavoriteGoalsWidget: React.FC = () => {
    const navigate = useNavigate()

    const {
        data: { favorite },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

    return !!favorite?.length ? (
        <div
            key={favorite?.length}
            className='flex max-h-[350px] min-h-[350px] flex-[100%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:flex-[45%]'
        >
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                {!!favorite?.length && (
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
                            startIcon={
                                <IconFavorite
                                    width={70}
                                    height={70}
                                    className='min-h-[70px] min-w-[70px] text-rose-600'
                                />
                            }
                        />
                    </div>
                )}
                <div className={styles['dashboard-widget-goals-container']}>
                    {favorite?.map((goal) => (
                        <TopGoal key={goal.id} goal={goal} />
                    ))}
                </div>
            </div>
        </div>
    ) : null
}
