import { editGoalAtom } from '../../../../stores/editGoal.store'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { EditGoalTitle } from './components/EditGoalTitle'
import { EditGoalFooter } from './components/EditGoalFooter'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { useMemo } from 'react'
import { EditGoalSlogan } from './components/EditGoalSlogan'
import { EditGoalDescription } from './components/EditGoalDescription'
import { EditGoalFinishedAt } from './components/EditGoalFinishedAt'
import { EditGoalRitualIntervalInput } from './components/edit-goal-ritual/EditGoalRitualIntervalInput'
import { convertDateToString } from '@/functions/date.helpers'

export const EditGoalDialogBody: React.FC<{ goal: IActiveGoalOptimized }> = ({ goal }) => {
    const isNewRitual = selectedGoalAtom$.get(selectedGoalAtom)?.is_new_ritual

    console.log('isNewRitual', isNewRitual)

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
                              ritual_type: 'interval_in_days',
                              ritual_interval: 1,
                              ritual_id: crypto.randomUUID(),
                              created_at: convertDateToString(new Date(Date.now())),
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
                        <EditGoalTitle />
                        <EditGoalSlogan />
                        <EditGoalDescription />
                        <EditGoalFinishedAt />
                    </>
                )}
                <EditGoalFooter />
            </div>
        </>
    )
}
