import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { TopGoal } from '../TopGoal'
import { Icon } from '@iconify/react'
import { StyledButton } from '@/components/buttons/StyledButton'

export const TopFavoriteGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { favoriteDashboardGoals, applySelectedWidgetGoals },
    } = useRootStore()

    if (!favoriteDashboardGoals.length) return null

    return (
        <div className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-39px] top-[-44px]  cursor-pointer'>
                    <StyledButton
                        onClick={() => {
                            applySelectedWidgetGoals(favoriteDashboardGoals)
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={
                            <Icon
                                icon='line-md:heart-twotone'
                                width={70}
                                height={70}
                                className='min-h-[70px] min-w-[70px] text-rose-600'
                            />
                        }
                    />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {favoriteDashboardGoals.map((goal) => (
                        <TopGoal key={goal.id} goal={goal} />
                    ))}
                </div>
            </div>
        </div>
    )
})
