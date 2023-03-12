import { XSelect } from '@/components-x/xselect/XSelect'
import { STATUS_ENUM } from '@/helpers/enums'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const SelectStatus: React.FC = observer(() => {
    const { new_goal, is_creator_mode, editable_goal } = useGoalsStore()

    if (!new_goal) return null

    const { status, onChangeField, isNewGoal } = new_goal

    let options = [
        {
            value: STATUS_ENUM.ACTIVE,
            label: STATUS_ENUM.ACTIVE,
        },
        {
            value: STATUS_ENUM.FINISHED,
            label: STATUS_ENUM.FINISHED,
        },
        {
            value: STATUS_ENUM.COMPLETED,
            label: STATUS_ENUM.COMPLETED,
        },
        {
            value: STATUS_ENUM.FROZEN,
            label: STATUS_ENUM.FROZEN,
        },
        {
            value: STATUS_ENUM.DEPRECATED,
            label: STATUS_ENUM.DEPRECATED,
        },
        {
            value: STATUS_ENUM.FAILED,
            label: STATUS_ENUM.FAILED,
        },
    ]

    if (isNewGoal)
        options = [
            {
                value: STATUS_ENUM.ACTIVE,
                label: STATUS_ENUM.ACTIVE,
            },
            {
                value: STATUS_ENUM.FROZEN,
                label: STATUS_ENUM.FROZEN,
            },
        ]

    return (
        <>
            <div>
                <h3 className='py-2'>Status: </h3>
                <XSelect
                    disabled={!is_creator_mode || editable_goal?.goal_ritualized_mode}
                    value={status}
                    options={options}
                    onSelect={(value) => onChangeField('status', value)}
                />
            </div>
            <Divider />
        </>
    )
})
