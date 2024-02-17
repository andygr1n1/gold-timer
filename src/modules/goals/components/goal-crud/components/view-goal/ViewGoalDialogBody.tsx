import { GoalTitleInput } from '../common-components/GoalTitleInput'
import { GoalSloganInput } from '../common-components/GoalSloganInput'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { ViewGoalFooter } from './ViewGoalFooter'
import { GoalDescriptionRichInput } from '../common-components/GoalDescriptionRichInput'
import { GoalCreatedAt } from '../common-components/GoalCreatedAt'
import { GoalFinishCalendarInput } from '../common-components/GoalFinishCalendarInput'
import { GoalRitualIntervalInput } from '../common-components/GoalRitualIntervalInput'

export const ViewGoalDialogBody: React.FC<{ goal: IActiveGoalOptimized }> = ({ goal }) => {
    return (
        <>
            <div className='animate-opacity-3 flex flex-col gap-4 py-2'>
                <GoalTitleInput value={goal!.title} view_mode />
                <GoalSloganInput value={goal!.slogan} view_mode hide={!goal.slogan} />
                <GoalDescriptionRichInput value={goal.description} view_mode hide={!goal.description} />
                <GoalCreatedAt goal={goal} />
                <GoalFinishCalendarInput view_mode value={goal.finished_at} />
                <GoalRitualIntervalInput goal={goal} />
            </div>

            <ViewGoalFooter goal={goal} />
        </>
    )
}