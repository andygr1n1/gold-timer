import { Button, Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { NewSprintGoal } from './NewSprintGoal'
import { last } from 'lodash-es'
import { useSprintsStore } from '@/StoreProvider'

export const NewSprintGoalIndex: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()

    return (
        <Form.Item>
            <div className='flex flex-col gap-5'>
                {new_sprint?.sprints_goals.map((goal, i) => (
                    <div className='flex items-center justify-center gap-2'>
                        <div
                            className='bg-x-sky flex h-4 w-4 items-center justify-center rounded-full
                        p-1 text-[10px] leading-[0px] text-white'
                        >
                            {i + 1}
                        </div>
                        <NewSprintGoal key={goal.id} goal={goal} />
                    </div>
                ))}
            </div>
            <Button
                className='my-5 w-full disabled:bg-gray-200'
                type='primary'
                onClick={new_sprint?.addNewSprintGoal}
                disabled={!!!last(new_sprint?.sprints_goals)?.title}
            >
                +
            </Button>
        </Form.Item>
    )
})
