import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { GoalFormIsFavoriteOption } from '@/modules/goals/components/create-edit-goal/components/GoalFormIsFavoriteOption'
import { useGoalsStore } from '@/StoreProvider'
import { cloneDeep } from 'lodash-es'
import { FormFooter } from '@/components/form/FormFooter'
import { GoalTitleInput } from './components/GoalTitleInput'
import { GoalSloganInput } from './components/GoalSloganInput'
import { GoalDescriptionRichInput } from './components/GoalDescriptionRichInput'
import { GoalFinishCalendarInput } from './components/GoalFinishCalendarInput'
import { GoalCreatedAt } from './components/GoalCreatedAt'
import { GoalRitualIntervalInput } from './components/input-ritual-type/GoalRitualIntervalInput'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'

export const CreateEditGoalDialog: React.FC = observer(function CreateEditGoalDialog() {
    const { onChangeField, new_goal } = useGoalsStore()

    const onCancel = () => onChangeField('new_goal', undefined)

    console.log('new_goal', cloneDeep(new_goal))

    return (
        <XModal
            open={!!new_goal}
            onCancel={onCancel}
            title={
                <div className='flex items-center justify-center gap-5'>
                    {!new_goal?.view_mode && <div>{new_goal?.edit_mode ? 'Edit Goal' : 'Create Goal'}</div>}
                    <GoalFormIsFavoriteOption />
                </div>
            }
        >
            {/* New Goal Image */}
            {/*  */}
            {/* New Sprint Form */}
            <div className='flex flex-col gap-4 py-2'>
                <GoalTitleInput />
                <GoalSloganInput />
                <GoalDescriptionRichInput />
                <GoalCreatedAt />
                <GoalFinishCalendarInput />
                <GoalRitualIntervalInput />
            </div>
            <Footer />
        </XModal>
    )
})

const Footer = observer(() => {
    const { generateGoal, new_goal, cancelGoalCreator } = useGoalsStore()
    if (new_goal?.view_mode)
        return (
            <div className='mt-10 flex w-full items-center justify-center gap-6'>
                <StyledButton size='extraLarge' variant='outlined' className='w-28' onClick={cancelGoalCreator}>
                    <Icon icon='ep:back' width={24} height={24} />{' '}
                </StyledButton>
            </div>
        )
    return <FormFooter onOk={generateGoal} disabled={!new_goal?.goalDataValidator} onCancel={cancelGoalCreator} />
})
