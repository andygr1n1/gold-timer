import { Button, Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { NewSprintGoal } from './NewSprintGoal'
import { last } from 'lodash-es'
import { useSprintsStore } from '@/StoreProvider'

export const NewSprintGoalIndex: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()

    return (
        <Form.Item>
            <h5 className='!my-5'>Sprint goals:</h5>
            <div className='flex flex-col gap-2'>
                {new_sprint?.sprints_goals.map((goal) => (
                    <NewSprintGoal key={goal.id} goal={goal} />
                ))}
            </div>
            <Button
                className='my-2 w-full disabled:bg-gray-200'
                type='primary'
                onClick={new_sprint?.addNewSprintGoal}
                disabled={!!!last(new_sprint?.sprints_goals)?.title}
            >
                +
            </Button>
        </Form.Item>
    )
})
