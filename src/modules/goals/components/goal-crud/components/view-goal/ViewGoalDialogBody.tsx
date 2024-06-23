import { GoalTitleInput } from '../common-components/GoalTitleInput'
import { GoalSloganInput } from '../common-components/GoalSloganInput'
import { IGoalSchema } from '@/modules/goals/service/types'
import { ViewGoalFooter } from './ViewGoalFooter'
import { GoalDescriptionRichInput } from '../common-components/GoalDescriptionRichInput'
import { GoalCreatedAt } from '../common-components/GoalCreatedAt'
import { GoalFinishCalendarInput } from '../common-components/GoalFinishCalendarInput'
import { GoalRitualIntervalInput } from '../common-components/GoalRitualIntervalInput'
import { GoalDetails } from '../common-components/GoalDetails'

export const ViewGoalDialogBody: React.FC<{ goal: IGoalSchema }> = ({ goal }) => {
    return (
        <>
            <GoalDetails goal={goal} />
            <div className='flex flex-col gap-4 py-2'>
                <GoalTitleInput value={goal!.title} view_mode />
                <GoalSloganInput value={goal!.slogan} view_mode hide={!goal.slogan} />
                <GoalDescriptionRichInput value={goal.description} view_mode hide={!goal.description} />
                <GoalCreatedAt goal={goal} />
                <GoalFinishCalendarInput view_mode value={goal.finished_at || ''} />
                <GoalRitualIntervalInput goal={goal} />
            </div>

            <ViewGoalFooter goal={goal} />
        </>
    )
}
