import { useRootStore } from '@/StoreProvider'
import { XButton } from '@/components-x/x-button/XButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const EditGoalFormFooter: React.FC = observer(() => {
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
                    Save
                </XButton>
            )}
        </div>
    )
})
