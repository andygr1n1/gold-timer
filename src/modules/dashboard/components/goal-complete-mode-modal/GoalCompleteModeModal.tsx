import { RdButton } from '@/components-antd-redesign/antrd-button/RdButton'
import { RdModal } from '@/components-antd-redesign/antrd-modal/AntrdModal'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const GoalCompleteModeModal: React.FC = observer(() => {
    const {
        goals$: { complete_goal_modal, closeGoalCompleteMode },
    } = useRootStore()

    if (!complete_goal_modal) return null

    const { completeGoal, goGoalRitualizedMode, failGoal } = complete_goal_modal

    return (
        <RdModal
            title={<h3 className='font-mono font-semibold text-gray-700'>Complete Goal</h3>}
            open={!!complete_goal_modal?.id}
            footer={null}
            onOk={closeGoalCompleteMode}
            onCancel={closeGoalCompleteMode}
            width={'70vw'}
        >
            <div className='flex flex-auto flex-col'>
                <div className='relative flex h-full w-full gap-5 overflow-auto'>
                    <RdButton className='greenbutton h-full w-72 hover:font-bold' type='primary' onClick={completeGoal}>
                        Complete
                    </RdButton>

                    <RdButton
                        className='redbutton ml-auto h-full w-24 hover:font-bold'
                        type='primary'
                        onClick={failGoal}
                    >
                        Failed !
                    </RdButton>
                </div>
            </div>
        </RdModal>
    )
})
