import { XSelect } from '@/components-x/x-select/XSelect'
import { convertDateToString, setMidnightTime, setZeroTime } from '@/functions/date.helpers'
import { generateNewRitualCircle } from '@/functions/generateNewRitualCircle'
import { editGoalAtom } from '@/modules/goals/stores/editGoal.store'
import { parseISO } from 'date-fns'
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
        const new_ritual_interval = _editGoalAtom.goal_ritual?.ritual_interval
        const ritual_type = _editGoalAtom.goal_ritual?.ritual_type
        const goal_created_at = _editGoalAtom.created_at
            ? parseISO(_editGoalAtom.created_at)
            : setZeroTime(new Date(Date.now()))
        const goal_finished_at = _editGoalAtom.finished_at
            ? setMidnightTime(parseISO(_editGoalAtom.finished_at))
            : setMidnightTime(new Date(Date.now()))

        if (!ritual_type || !new_ritual_interval) return

        const { ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type,
            new_ritual_interval,
            goal_created_at,
            goal_finished_at,
            edit: true,
        })

        _setEditGoalAtom((prev) => ({
            ...prev,
            finished_at: convertDateToString(ritual_goal_finished_at),
            goal_ritual: { ...prev?.goal_ritual, ritual_interval: +value },
        }))
    }

    const options = [
        { value: '1', label: 'Monday' },
        { value: '2', label: 'Tuesday' },
        { value: '3', label: 'Wednesday' },
        { value: '4', label: 'Thursday' },
        { value: '5', label: 'Friday' },
        { value: '6', label: 'Saturday' },
        { value: '0', label: 'Sunday' },
    ]

    return <XSelect value={goal_ritual.ritual_interval} onChange={handleChange} options={options} />
}
