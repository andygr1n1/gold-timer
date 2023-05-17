import { observer } from 'mobx-react-lite'
import { Breadcrumb } from 'antd'
import { useGoalsStore } from '@/StoreProvider'
import { cast } from 'mobx-state-tree'
import { IGoal$ } from '@/mst/types'

export const Breadcrumbs: React.FC = observer(() => {
    const { onChangeField, new_goal, goal_on_delete, exitEditMode } = useGoalsStore()

    const items = [
        {
            title: (
                <button className='cursor-pointer rounded-md p-1 hover:bg-gray-100' onClick={exitEditMode}>
                    Active Goals
                </button>
            ),
        },
        {
            title: (
                <button
                    onClick={() => {
                        onChangeField('goal_on_delete', undefined)
                    }}
                    className='cursor-pointer rounded-md p-1 hover:bg-gray-100'
                >
                    {generateCrumb(new_goal)}
                </button>
            ),
        },
    ]

    goal_on_delete &&
        items.push({
            title: <button className='cursor-default p-1'>{'Delete Goal'}</button>,
        })

    return <Breadcrumb items={items} />
})

const generateCrumb = (new_goal: IGoal$): string => {
    let crumb = 'Edit goal'
    if (new_goal.parent_goal_id) crumb = 'Create child'
    if (new_goal.goal_ritualized_mode) crumb = 'Ritualize goal'
    return crumb
}
