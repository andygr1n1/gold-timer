import { GoalCreatedAt } from '../../../goal-editor-form-items/GoalCreatedAt'
import { GoalDescriptionRichInput } from '../../../goal-editor-form-items/GoalDescriptionRichInput'
import { GoalFinishCalendarInput } from '../../../goal-editor-form-items/GoalFinishCalendarInput'
import { GoalSloganInput } from '../../../goal-editor-form-items/GoalSloganInput'
import { GoalTitleInput } from '../../../goal-editor-form-items/GoalTitleInput'

export const GoalInfo: React.FC = () => {
    return (
        <>
            <GoalCreatedAt />
            <div className='flex flex-col gap-5'>
                <GoalTitleInput />
                <GoalSloganInput />
                <GoalDescriptionRichInput />
                <GoalFinishCalendarInput />
            </div>
        </>
    )
}
