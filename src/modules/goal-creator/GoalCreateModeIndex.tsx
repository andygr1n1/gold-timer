import { RdButton } from '@/components/antrd-button/RdButton'
import { RdModal } from '@/components/antrd-modal/AntrdModal'
import { useGoalsStore, useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { CreateFinishDate } from './goal-creator-components/body-inputs/CreateFinishDate'
import { InputSlogan } from './goal-creator-components/body-inputs/InputSlogan'
import { InputTitle } from './goal-creator-components/body-inputs/InputTitle'
import { SelectPrivacy } from './goal-creator-components/body-inputs/SelectPrivacy'
import { SelectStatus } from './goal-creator-components/body-inputs/SelectStatus'
import { TextAreaDescription } from './goal-creator-components/body-inputs/TextAreaDescription'

export const GoalCreateModeIndex: React.FC = observer(() => {
    const {
        goals$: { editable_goal, closeGoalCreator },
    } = useRootStore()

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
                <div className='relative flex h-full w-full gap-5 overflow-auto'>
                    <div className='flex  flex-[33%] flex-col'>
                        <InputTitle />

                        <InputSlogan />

                        <TextAreaDescription />
                    </div>
                    <div className='flex  flex-[33%] flex-col'>
                        <SelectStatus />

                        {!editable_goal?.isFrozen && <SelectPrivacy />}
                        <CreateFinishDate />
                    </div>
                    {/* <div className='flex  flex-[33%] flex-col'></div> */}
                </div>
            </div>

            <GoalCreatorFooter />
        </RdModal>
    )
})

const GoalCreatorTitle = () => {
    return (
        <div className='flex w-full items-center justify-between pr-10'>
            <h3 className='font-mono font-semibold text-gray-700'>Create Goal</h3>
        </div>
    )
}

const GoalCreatorFooter = observer(() => {
    const { generateGoal, isNotValidToSaveGoalData } = useGoalsStore()

    return (
        <div className='flex h-[40px] w-full items-center justify-center gap-5'>
            <RdButton
                className='w-[150px]'
                disabled={isNotValidToSaveGoalData}
                type='primary'
                size='large'
                onClick={() => generateGoal()}
            >
                Create new goal
            </RdButton>
        </div>
    )
})
