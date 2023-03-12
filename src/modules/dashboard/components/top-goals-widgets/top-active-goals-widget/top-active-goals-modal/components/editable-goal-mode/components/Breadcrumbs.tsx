import { observer } from 'mobx-react-lite'
import { Breadcrumb } from 'antd'
import { useGoalsStore } from '@/StoreProvider'
import { cast } from 'mobx-state-tree'

export const Breadcrumbs: React.FC = observer(() => {
    const { onChangeField, new_goal } = useGoalsStore()

    const crumb = new_goal.parent_goal_id ? 'Create child' : 'Edit goal'

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
                    title: <span className='cursor-default p-1'>{crumb}</span>,
                },
            ]}
        />
    )
})
