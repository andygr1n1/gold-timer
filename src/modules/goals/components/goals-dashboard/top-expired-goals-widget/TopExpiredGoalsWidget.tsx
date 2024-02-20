import { observer } from 'mobx-react-lite'
import { TopGoal } from '../components/TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useFetchGoalsByFilter } from '@/modules/goals/service'
import { useNavigate } from 'react-router-dom'
import { IconExpired } from '@/assets/icons/IconExpired'
export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const navigate = useNavigate()

    const {
        data: { expired },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

    return expired?.length ? (
        <div className='flex max-h-[350px] min-h-[350px] flex-[100%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                {!!expired?.length && (
                    <div className='absolute left-[-40px] top-[-42px]  cursor-pointer '>
                        <StyledButton
                            onClick={() => {
                                navigate(
                                    { pathname: '/dashboard/filtered-goals', search: `?filter=expired` },
                                    { state: { filter: 'expired' } },
                                )
                            }}
                            variant='text'
                            className='!h-24 !w-24 !rounded-full'
                            startIcon={
                                <IconExpired
                                    width={65}
                                    height={65}
                                    className='min-h-[65px] min-w-[65px] text-amber-600'
                                />
                            }
                        />
                    </div>
                )}

                <div className={styles['dashboard-widget-goals-container']}>
                    {expired?.slice(0, 8).map((goal) => (
                        <TopGoal key={goal.id} goal={goal} />
                    ))}
                </div>
            </div>
        </div>
    ) : null
})
