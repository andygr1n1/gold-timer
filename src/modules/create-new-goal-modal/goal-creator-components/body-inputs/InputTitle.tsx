import { RdInput } from '@/components-antd-redesign/rd-inputs/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputTitle: React.FC = observer(() => {
    const { new_goal, is_creator_mode } = useGoalsStore()

    if (!new_goal) return null

    const { title, onChangeField } = new_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Title: </h3>
                <RdInput
                    status={!!title.length ? undefined : 'error'}
                    disabled={!is_creator_mode}
                    value={title}
                    autoFocus={true}
                    onChange={(e) => onChangeField('title', e.target.value)}
                />
            </div>
            <Divider />
        </>
    )
})
