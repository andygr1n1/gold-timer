import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { NewSprintAchievement } from './NewSprintAchievement'

export const NewSprintAchievementIndex: React.FC = observer(() => {
    return (
        <Form.Item>
            <h5 className='!my-5'>Sprint achievement:</h5>
            <NewSprintAchievement />
        </Form.Item>
    )
})
