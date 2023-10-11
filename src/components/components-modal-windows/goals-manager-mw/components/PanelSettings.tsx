import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'
import { PanelGoalMenuActions } from './PanelGoalMenuActions'
import { FavoriteGoalTrigger } from '@/components/FavoriteGoalTrigger'

export const PanelSettings: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <div className='flex flex-col items-center justify-center  gap-2'>
            <PanelGoalMenuActions goal={goal} />
            <FavoriteGoalTrigger goal={goal} />
        </div>
    )
})
