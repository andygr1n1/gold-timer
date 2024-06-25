import { useEffect } from 'react'
import { XInput } from '@/components-x/x-input/XInput'
import { generateNewRitualCircle } from '@/helpers/generateNewRitualCircle'
import { useAtom } from 'jotai'
import { editGoalAtom } from '@/modules/goals/stores/editGoal.store'
import { formatDateWithTimezone, convertStringDate, setMidnightTime } from '@/helpers/date.helpers'
import { RITUAL_TYPE_ENUM } from '@/services/enums'

export const SelectDays = () => {
    const [_editGoalAtom, _setEditGoalAtom] = useAtom(editGoalAtom)

    useEffect(() => {
        if (_editGoalAtom?.goal_ritual?.ritual_interval === 0) {
            _setEditGoalAtom((prev) => ({
                ...prev,
                goal_ritual: { ...prev?.goal_ritual, ritual_interval: 1 },
            }))
        }
    }, [])

    if (!_editGoalAtom || !_editGoalAtom?.goal_ritual) return null

    const onRitualIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.target.value || 0
        if (+value > 31) {
            value = 31
        }

        const ritual_type = _editGoalAtom.goal_ritual?.ritual_type as RITUAL_TYPE_ENUM
        const goal_finished_at = _editGoalAtom.finished_at
            ? setMidnightTime(convertStringDate(_editGoalAtom.finished_at))
            : setMidnightTime(new Date(Date.now()))

        if (!ritual_type) return

        const { ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type,
            new_ritual_interval: value || 1,
            goal_finished_at,
            edit: true,
        })
        _setEditGoalAtom((prev) => ({
            ...prev,
            finished_at: formatDateWithTimezone(ritual_goal_finished_at),
            goal_ritual: { ...prev?.goal_ritual, ritual_interval: +value },
        }))
        return e
    }

    return (
        <XInput
            min={1}
            type='number'
            max={31}
            value={_editGoalAtom?.goal_ritual.ritual_interval || ''}
            onChange={onRitualIntervalChange}
        />
    )
}
