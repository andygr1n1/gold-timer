import { FormLabel } from '@/components/form/FormLabel'
import { XSelect } from '@/components-x/x-select/XSelect'
import { XInput } from '@/components-x/x-input/XInput'
import { IconInfinity } from '@/assets/icons/IconInfinity'
import { DaysOfTheWeek } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { type IGoalSchema, goalRitualType } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { GoalRitualEditMode } from '../goal-editor-tabs/components/goal-ritual/components/goal-ritual-edit-mode/GoalRitualEditMode'

export const GoalRitualIntervalInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()
    const { goal_ritual } = formikContext.values

    if (!goal_ritual) return null

    const { ritual_type, ritual_interval, ritual_power } = goal_ritual

    const isIntervalDayOfWeek = ritual_type === goalRitualType.days_of_week

    if (!viewMode) return <GoalRitualEditMode />

    return (
        <>
            <span
                className='text-cText mb-8 mt-4 flex items-center justify-center gap-5 bg-transparent text-xl font-bold focus-visible:outline-none '
                tabIndex={0}
            >
                <IconInfinity width={24} height={24} className='text-teal-600' />
                <span className='capitalize text-teal-600'>{'Ritual'}</span>
            </span>
            <div>
                <FormLabel title='Ritual power' />
                <XInput readOnly={true} type='number' value={ritual_power} onChange={() => {}} />
            </div>
            <div>
                <FormLabel title='Ritual interval' />
                <div className='flex flex-col gap-2'>
                    <div className='relative flex items-center justify-start gap-2'>
                        <div className='font-extralight'>
                            {isIntervalDayOfWeek ? 'Day of week' : 'Interval between days'}
                        </div>
                    </div>
                    {isIntervalDayOfWeek ? (
                        <XSelect
                            readOnly={viewMode}
                            value={ritual_interval}
                            onChange={() => {}}
                            options={DaysOfTheWeek}
                        />
                    ) : (
                        <XInput readOnly={true} type='number' value={ritual_interval} onChange={() => {}} />
                    )}
                </div>
            </div>
        </>
    )
}
