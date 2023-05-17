import { InputCreatedAt } from '@/components-modal-windows/create-new-goal-modal/components/InputCreatedAt'
import { InputFinishedAt } from '@/components-modal-windows/create-new-goal-modal/components/InputFinishedAt'
import { InputSlogan } from '@/components-modal-windows/create-new-goal-modal/components/InputSlogan'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { TextAreaDescription } from '@/components-modal-windows/create-new-goal-modal/components/TextAreaDescription'
import { XButton } from '@/components-x/x-button/XButton'

import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import { Icon } from '@iconify/react'

export const EditGoalForm: React.FC = observer(() => {
    return (
        <>
            <div className='relative my-5 flex flex-col '>
                <GoalFormTitleOption />
                <InputSlogan />
                <TextAreaDescription />
                <InputCreatedAt />
                <InputFinishedAt />
            </div>
            <Footer />
        </>
    )
})

const Footer = observer(() => {
    const {
        goals$: { generateGoal, new_goal, toggleDeleteGoalMenu, editable_goal },
        modal_windows$: {
            goals_manager_mw$: { forceClose },
        },
    } = useRootStore()

    const handleOnClick = () => {
        generateGoal().then(() => {
            forceClose()
        })
    }

    return (
        <div className={`flex w-full items-center ${editable_goal?.isRitualGoal ? 'justify-end' : 'justify-between'}`}>
            {!editable_goal?.isRitualGoal && (
                <Icon
                    width={30}
                    icon='material-symbols:delete-forever-rounded'
                    className='cursor-pointer text-red-500 opacity-30 duration-300 hover:opacity-100'
                    onClick={() => toggleDeleteGoalMenu()}
                />
            )}
            {editable_goal && (
                <XButton
                    disabled={!new_goal.isValidForMutation}
                    onClick={() => handleOnClick()}
                    className='flex self-end'
                >
                    Saveddqwdqdx!!wefwefw
                </XButton>
            )}
        </div>
    )
})
