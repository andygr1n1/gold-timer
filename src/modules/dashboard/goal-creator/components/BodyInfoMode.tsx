import { useGoalsStore } from '@/StoreProvider'
import { Divider, Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { InputSlogan } from './InputSlogan'
import { InputTitle } from './InputTitle'

export const BodyInfoMode: React.FC = observer(() => {
    const { editable_goal } = useGoalsStore()

    if (!editable_goal) return null

    const { description, status, difficulty, privacy, round, created_at, finished_at } = editable_goal

    return (
        <div>
            <InputTitle />
            <InputSlogan />

            <div>
                <h3>Description: </h3>
                <Input disabled value={description} />
            </div>
            <Divider />

            <div>
                <h3>Status: </h3>
                <Input disabled value={status} />
            </div>
            <Divider />

            <div>
                <h3>Difficulty: </h3>
                <Input disabled value={difficulty} />
            </div>
            <Divider />

            <div>
                <h3>Privacy: </h3>
                <Input disabled value={privacy} />
            </div>
            <Divider />

            <div>
                <h3>Round: </h3>
                <Input disabled value={round} />
            </div>
            <Divider />

            <div>
                <h3>Created date: </h3>
                <Input disabled value={created_at.toDateString()} />
            </div>
            <Divider />

            <div>
                <h3>Finish Date: </h3>
                <Input disabled value={finished_at.toDateString()} />
            </div>
            <Divider />
        </div>
    )
})
