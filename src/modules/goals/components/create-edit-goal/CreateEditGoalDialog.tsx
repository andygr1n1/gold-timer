import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalsStore } from '@/StoreProvider'
import { FormFooter } from '@/components/form/FormFooter'
import { GoalTitleInput } from './components/GoalTitleInput'
import { GoalSloganInput } from './components/GoalSloganInput'
import { GoalDescriptionRichInput } from './components/GoalDescriptionRichInput'
import { GoalFinishCalendarInput } from './components/GoalFinishCalendarInput'
import { GoalCreatedAt } from './components/GoalCreatedAt'
import { GoalRitualIntervalInput } from './components/input-ritual-type/GoalRitualIntervalInput'
import { Icon } from '@iconify/react'
import { GoalDetails } from './GoalDetails'
import { GoalActionsMenu } from './components/actions-menu/GoalActionsMenu'
import { IGoalNew$ } from '@/mst/types'
import { GoalFormIsFavoriteOption } from './components/GoalFormIsFavoriteOption'

export const CreateEditGoalDialog: React.FC = observer(function CreateEditGoalDialog() {
    const { onChangeField, new_goal } = useGoalsStore()

    const onCancel = () => onChangeField('new_goal', undefined)

    return (
        <XModal
            open={!!new_goal}
            onCancel={onCancel}
            title={
                <div className='flex items-center justify-center gap-5'>
                    <div>{createDialogTitle(new_goal)}</div>
                    <GoalFormIsFavoriteOption />
                </div>
            }
        >
            <div className='flex flex-col gap-10 pb-10'>
                <GoalActionsMenu />
                <GoalDetails />
            </div>
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

    if (new_goal?.view_mode && !new_goal.edit_mode)
        return (
            <FormFooter
                okTitle={
                    <div className='flex items-center justify-center gap-2'>
                        <Icon
                            icon={new_goal?.isRitualGoal ? 'icon-park-outline:auto-focus' : 'fa:check-circle'}
                            width={16}
                            height={16}
                        />
                        <div>{new_goal?.isRitualGoal ? 'Ritualize' : 'Complete'}</div>
                    </div>
                }
                onOk={() => {
                    new_goal.completeGoal()
                }}
                disabled={!!new_goal?.deleted_at || (new_goal?.isRitualGoal && new_goal?.isFromFuture)}
                onCancel={() =>
                    new_goal?.view_mode && new_goal?.edit_mode
                        ? new_goal?.onChangeField('edit_mode', false)
                        : cancelGoalCreator()
                }
            />
        )
    return (
        <FormFooter
            onOk={generateGoal}
            disabled={!new_goal?.goalDataValidator}
            onCancel={() =>
                new_goal?.view_mode && new_goal?.edit_mode
                    ? new_goal?.onChangeField('edit_mode', false)
                    : cancelGoalCreator()
            }
        />
    )
})

const createDialogTitle = (newGoal: IGoalNew$ | undefined): string => {
    if (!newGoal) return ''
    if (newGoal.view_mode) return newGoal.title
    if (newGoal.create_ritual_mode) return 'Create new ritual'
    if (newGoal.edit_mode) return 'Edit goal'
    return 'Create goal'
}
