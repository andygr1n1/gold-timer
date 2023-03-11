import { observer } from 'mobx-react-lite'
import { Breadcrumb } from 'antd'
import { useGoalsStore } from '@/StoreProvider'
import { cast } from 'mobx-state-tree'
import { useEffect } from 'react'

export const Breadcrumbs: React.FC = observer(() => {
    const { onChangeField } = useGoalsStore()

    useEffect(() => {
        return () => {
            onChangeField('editable_goal', undefined)
            onChangeField('new_goal', cast({}))
        }
    }, [])

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
                    title: <span className='cursor-default p-1'>Edit Goal</span>,
                },
            ]}
        />
    )
})
