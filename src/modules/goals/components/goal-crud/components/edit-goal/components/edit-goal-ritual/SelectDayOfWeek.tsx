import { XSelect } from '@/components-x/x-select/XSelect'
import { DaysOfTheWeek, convertDateToString, convertStringDate, setMidnightTime } from '@/functions/date.helpers'
import { generateNewRitualCircle } from '@/functions/generateNewRitualCircle'
import { editGoalAtom, getImmutableFinishedAt } from '@/modules/goals/stores/editGoal.store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export const SelectDayOfWeek = () => {
    const [_editGoalAtom, _setEditGoalAtom] = useAtom(editGoalAtom)

    useEffect(() => {
        if ((goal_ritual?.ritual_interval || 0) > 6) {
            _setEditGoalAtom((prev) => ({
                ...prev,
                goal_ritual: { ...prev?.goal_ritual, ritual_interval: 1 },
            }))
        }
    }, [])

    if (!_editGoalAtom || !_editGoalAtom.goal_ritual) return null
    const { goal_ritual } = _editGoalAtom

    const handleChange = (value: string) => {
        if (!_editGoalAtom.goal_ritual) return

        const new_ritual_interval = +value
        const ritual_type = _editGoalAtom.goal_ritual.ritual_type

        const immutableFinishedAt = getImmutableFinishedAt(_editGoalAtom.id)
        const goal_finished_at = setMidnightTime(
            immutableFinishedAt ? convertStringDate(immutableFinishedAt) : new Date(Date.now()),
        )

        const { ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type,
            new_ritual_interval,
            goal_finished_at,
            edit: true,
        })

        _setEditGoalAtom((prev) => ({
            ...prev,
            finished_at: convertDateToString(ritual_goal_finished_at),
            goal_ritual: { ...prev?.goal_ritual, ritual_interval: +value },
        }))
    }

    return <XSelect value={goal_ritual.ritual_interval} onChange={handleChange} options={DaysOfTheWeek} />
}
