import { RdTextArea } from '@/components/antrd-textarea/AntrdTextarea'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const TextAreaDescription: React.FC = observer(() => {
    const { editable_goal } = useGoalsStore()

    if (!editable_goal) return null

    const { description } = editable_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Title: </h3>
                <RdTextArea disabled value={description} />
            </div>
            <Divider />
        </>
    )
})
