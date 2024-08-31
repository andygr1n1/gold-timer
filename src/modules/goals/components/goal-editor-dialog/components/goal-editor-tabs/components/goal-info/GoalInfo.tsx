import { GoalCreatedAt } from '../../../goal-editor-form-items/GoalCreatedAt'
import { GoalDescriptionRichInput } from '../../../goal-editor-form-items/GoalDescriptionRichInput'
import { GoalFinishCalendarInput } from '../../../goal-editor-form-items/GoalFinishCalendarInput'
import { GoalSloganInput } from '../../../goal-editor-form-items/GoalSloganInput'
import { GoalTitleInputIndex } from '../../../goal-editor-form-items/goal-title-input/GoalTitleInputIndex'

export const GoalInfo: React.FC = () => {
    return (
        <>
            <GoalCreatedAt />
            <div className='flex flex-col gap-5'>
                <GoalTitleInputIndex />
                <GoalSloganInput />
                <GoalDescriptionRichInput />
                <GoalFinishCalendarInput />
            </div>
        </>
    )
}
