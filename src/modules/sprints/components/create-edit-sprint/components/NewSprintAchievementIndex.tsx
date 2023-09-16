import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { NewSprintAchievement } from './NewSprintAchievement'
import { FormLabel } from '@/components/form/FormLabel'

export const NewSprintAchievementIndex: React.FC = observer(() => {
    return (
        <Form.Item>
            <FormLabel title='Sprint achievement:' />
            <NewSprintAchievement />
        </Form.Item>
    )
})
