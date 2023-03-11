import { RdModal } from '@/components-antd-redesign/antrd-modal/AntrdModal'
import { XButton } from '@/components-x/xbutton/XButton'
import { useGoalsStore, useRootStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { CreateFinishDate } from './goal-creator-components/body-inputs/CreateFinishDate'
import { InputSlogan } from './goal-creator-components/body-inputs/InputSlogan'
import { InputTitle } from './goal-creator-components/body-inputs/InputTitle'
import { TextAreaDescription } from './goal-creator-components/body-inputs/TextAreaDescription'

export const CreateNewGoalModal: React.FC = observer(() => {
    const {
        goals$: { editable_goal, closeGoalCreator },
    } = useRootStore()

    return (
        <RdModal
            title={'Create Goal'}
            open={!!editable_goal?.id && !editable_goal?.created_at}
            footer={null}
            onOk={closeGoalCreator}
            onCancel={closeGoalCreator}
        >
            <div className='relative flex  flex-col '>
                <InputTitle />

                <InputSlogan />

                <TextAreaDescription />

                <CreateFinishDate />

                <Divider />

                <GoalCreatorFooter />
            </div>
        </RdModal>
    )
})

const GoalCreatorFooter = observer(() => {
    const { generateGoal, isNotValidToSaveGoalData } = useGoalsStore()

    return (
        <div className='flex h-[40px] w-full items-center justify-center pb-5'>
            <XButton disabled={isNotValidToSaveGoalData} onClick={generateGoal}>
                Create new goal
            </XButton>
        </div>
    )
})
