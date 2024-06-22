import { editGoalAtom } from '../../../../stores/editGoal.store'
import { IGoal } from '@/modules/goals/service/types'
import { EditGoalTitle } from './components/EditGoalTitle'
import { EditGoalFooter } from './EditGoalFooter'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { useMemo } from 'react'
import { EditGoalSlogan } from './components/EditGoalSlogan'
import { EditGoalDescription } from './components/EditGoalDescription'
import { EditGoalFinishedAt } from './components/EditGoalFinishedAt'
import { EditGoalRitualIntervalInput } from './components/edit-goal-ritual/EditGoalRitualIntervalInput'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { EditModeGoalDetails } from './components/EditModeGoalDetails'
import { RITUAL_TYPE_ENUM } from '@/services/enums'

export const EditGoalDialogBody: React.FC<{ goal: IGoal }> = ({ goal }) => {
    const isNewRitual = selectedGoalAtom$.get(selectedGoalAtom)?.is_new_ritual

    // useMemo helps to prevent updating EditStore, example can be toggle favorite goal
    // we need only to initialize editStore
    useMemo(
        () =>
            selectedGoalAtom$.set(
                editGoalAtom,
                isNewRitual
                    ? {
                          ...goal,
                          goal_ritual: {
                              ritual_power: 1,
                              goal_id: goal.id,
                              ritual_type: RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
                              ritual_interval: 1,
                              ritual_id: crypto.randomUUID(),
                              created_at: formatDateWithTimezone(new Date()),
                          },
                      }
                    : goal,
            ),
        [],
    )

    return (
        <>
            <div className='animate-opacity-3 flex flex-col gap-4 py-2'>
                {isNewRitual ? (
                    <div className='mt-4 min-h-[300px] flex-auto '>
                        <EditGoalRitualIntervalInput />
                    </div>
                ) : (
                    <>
                        <EditModeGoalDetails />
                        <EditGoalTitle />
                        <EditGoalSlogan />
                        <EditGoalDescription />
                        <EditGoalFinishedAt />
                        <EditGoalRitualIntervalInput />
                    </>
                )}
                <EditGoalFooter />
            </div>
        </>
    )
}
