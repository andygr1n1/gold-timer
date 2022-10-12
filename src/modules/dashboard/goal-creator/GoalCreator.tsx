import { RdModal } from '@/components/antrd-modal/AntrdModal'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const GoalCreator: React.FC = observer(() => {
    const {
        goals$: {
            goal_creator$: { is_open, onChangeField },
        },
    } = useRootStore()

    const onClose = () => {
        onChangeField('is_open', false)
    }

    return (
        <RdModal
            title={<h3 className='font-monoIitalic font-semibold text-gray-700'>Goal Creator</h3>}
            open={is_open}
            onOk={() => onClose()}
            onCancel={() => onClose()}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </RdModal>
    )
})
