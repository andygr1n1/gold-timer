import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'

export const GoalOnDelete: React.FC = observer(() => {
    const {
        modal_windows$: {
            goals_manager_mw$: { forceClose },
        },
        goals$: { goal_on_delete, toggleDeleteGoalMenu, exitEditMode },
    } = useRootStore()

    const handleFailed = () => {
        exitEditMode()
        goal_on_delete?.failGoal()
        forceClose()
    }
    const handleDelete = () => {
        exitEditMode()
        goal_on_delete?.deleteGoal()
        forceClose()
    }

    return (
        <div className='flex h-full w-full flex-col gap-10'>
            <Button size='large' type='dashed' className='my-2 w-fit' onClick={() => toggleDeleteGoalMenu('close')}>
                Go back
            </Button>
            <div className='flex flex-auto flex-col items-center gap-10 py-[20%]'>
                <h1 className='font-neon'>Confirmation</h1>
                <div className='flex items-center gap-5'>
                    <Button type='primary' size='large' onClick={handleFailed}>
                        Goal Failed
                    </Button>
                    <Button
                        onClick={handleDelete}
                        type='text'
                        className='flex items-center gap-2'
                        size='large'
                        danger
                        icon={<Icon icon='fa6-solid:power-off' width={14} />}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
})
