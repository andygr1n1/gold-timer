import { RdButton } from '@/components-antd-redesign/antrd-button/RdButton'
import { RdModal } from '@/components-antd-redesign/antrd-modal/AntrdModal'
import { useGoalsStore, useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { BodyInfoMode } from './goal-creator-components/BodyInfoMode'

export const GoalEditModeIndex: React.FC = observer(() => {
    const {
        goals$: { editable_goal, closeGoalCreator },
    } = useRootStore()

    return null
    return (
        <RdModal
            title={<GoalCreatorTitle />}
            open={!!editable_goal?.id}
            footer={null}
            onOk={closeGoalCreator}
            onCancel={closeGoalCreator}
            width={'70vw'}
        >
            <div className='flex flex-auto flex-col'>
                <BodyInfoMode />
            </div>

            <GoalCreatorFooter />
        </RdModal>
    )
})

const GoalCreatorTitle = observer(() => {
    const { is_creator_mode, editable_goal, goGoalEditMode, exitGoalEditMode } = useGoalsStore()

    const ritualizedMode = !!editable_goal?.goal_ritualized_mode

    const creatorTitle = ritualizedMode ? 'Ritualize Goal' : 'Edit Goal'

    const onClick = () => {
        if (is_creator_mode) {
            exitGoalEditMode()
        } else {
            goGoalEditMode()
        }
    }

    return (
        <div className='flex w-full items-center justify-between pr-10'>
            <h3 className='font-mono font-semibold text-gray-700'>{is_creator_mode ? creatorTitle : 'Goal Info'}</h3>
            {!ritualizedMode && (
                <RdButton className='w-[90px]' onClick={onClick}>
                    {is_creator_mode ? 'Back' : 'Edit Mode'}
                </RdButton>
            )}
        </div>
    )
})

const GoalCreatorFooter = observer(() => {
    const { is_creator_mode, generateGoal, ritualizeGoal, isNotValidToSaveGoalData, editable_goal } = useGoalsStore()

    const ritualizedMode = !!editable_goal?.goal_ritualized_mode

    const onClick = () => (ritualizedMode ? ritualizeGoal() : generateGoal())
    const btnText = ritualizedMode ? 'Ritualize' : 'Save'

    return is_creator_mode ? (
        <div className='flex h-[40px] w-full items-center justify-center gap-5'>
            <RdButton
                className={`${ritualizedMode ? 'indigobutton' : ''} w-[150px]`}
                disabled={isNotValidToSaveGoalData}
                type='primary'
                size='large'
                onClick={onClick}
            >
                {btnText}
            </RdButton>
        </div>
    ) : null
})
