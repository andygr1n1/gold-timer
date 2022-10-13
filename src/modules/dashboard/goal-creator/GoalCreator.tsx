import { RdButton } from '@/components/antrd-button/RdButton'
import { RdModal } from '@/components/antrd-modal/AntrdModal'
import { useGoalsStore, useRootStore } from '@/StoreProvider'
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
            title={<GoalCreatorTitle />}
            open={is_open}
            footer={null}
            onOk={() => onClose()}
            onCancel={() => onClose()}
        >
            <div className='flex flex-auto flex-col'>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>

            <GoalCreatorFooter />
        </RdModal>
    )
})

const GoalCreatorTitle = observer(() => {
    const { is_creator_mode, editable_goal, onChangeField } = useGoalsStore()

    const creatorTitle = editable_goal ? 'Edit Goal' : 'Create Goal'

    return (
        <div className='flex w-full items-center justify-between pr-10'>
            <h3 className='font-mono font-semibold text-gray-700'>{is_creator_mode ? creatorTitle : 'Goal Info'}</h3>
            <RdButton
                className='w-[90px]'
                onClick={() => onChangeField('is_creator_mode', is_creator_mode ? false : true)}
            >
                {is_creator_mode ? 'Back' : 'Edit Mode'}
            </RdButton>
        </div>
    )
})

const GoalCreatorFooter = observer(() => {
    const { is_creator_mode, editable_goal, onChangeField } = useGoalsStore()

    return is_creator_mode ? (
        <div className='flex h-[40px] w-full items-center justify-center gap-5'>
            <RdButton
                className='w-[150px]'
                type='primary'
                size='large'
                onClick={() => onChangeField('is_creator_mode', false)}
            >
                Save
            </RdButton>
        </div>
    ) : null
})
