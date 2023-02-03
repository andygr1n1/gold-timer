import { RdTextArea } from '@/components-antd-redesign/rd-textarea/RdTextarea'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const TextAreaDescription: React.FC = observer(() => {
    const { new_goal, is_creator_mode } = useGoalsStore()

    if (!new_goal) return null

    const { description, onChangeField } = new_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Description: </h3>
                <RdTextArea
                    disabled={!is_creator_mode}
                    value={description}
                    onChange={(e) => onChangeField('description', e.target.value)}
                    rows={8}
                />
            </div>
            <Divider />
        </>
    )
})
