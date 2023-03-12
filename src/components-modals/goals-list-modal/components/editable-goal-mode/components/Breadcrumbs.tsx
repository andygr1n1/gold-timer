import { observer } from 'mobx-react-lite'
import { Breadcrumb } from 'antd'
import { useGoalsStore } from '@/StoreProvider'
import { cast } from 'mobx-state-tree'
import { IGoal$ } from '@/mst/types'

export const Breadcrumbs: React.FC = observer(() => {
    const { onChangeField, new_goal } = useGoalsStore()

    return (
        <Breadcrumb
            items={[
                {
                    title: (
                        <button
                            className='cursor-pointer rounded-md p-1 hover:bg-gray-100'
                            onClick={() => {
                                onChangeField('editable_goal', undefined)
                                onChangeField('new_goal', cast({}))
                            }}
                        >
                            Active Goals
                        </button>
                    ),
                },
                {
                    title: <span className='cursor-default p-1'>{generateCrumb(new_goal)}</span>,
                },
            ]}
        />
    )
})

const generateCrumb = (new_goal: IGoal$): string => {
    let crumb = 'Edit goal'
    if (new_goal.parent_goal_id) crumb = 'Create child'
    if (new_goal.goal_ritualized_mode) crumb = 'Ritualize goal'
    return crumb
}
