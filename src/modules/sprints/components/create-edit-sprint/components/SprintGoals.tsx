import { Button, Form, Input, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { useSprintsStore } from '@/modules/app/mst/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { SprintGoalsList } from './SprintGoalsList'

export const SprintGoals: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()
    if (!new_sprint) return null
    const { goals, addNewSprintGoal, deleteSprintGoal, addNewGoalValidation, new_sprint_goal, onChangeField } =
        new_sprint
    return (
        <Form.Item>
            <FormLabel title='Sprint Goals:' />
            <Space.Compact size='large' className='mb-5 w-full'>
                <Input
                    placeholder={'Set goal...'}
                    value={new_sprint_goal}
                    onChange={(e) => onChangeField('new_sprint_goal', e.target.value)}
                />
                <Button className='' type='primary' onClick={addNewSprintGoal} disabled={!addNewGoalValidation}>
                    Save
                </Button>
            </Space.Compact>
            <SprintGoalsList goals={goals} deleteAction={deleteSprintGoal} />
        </Form.Item>
    )
})
