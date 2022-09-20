import { RdButton } from '@/components/antrd-button/RdButton'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const GoalBoxEditable: React.FC = observer(() => {
    const { toggleEditableGoal } = useGoalsStore()

    const removeEditableGoal = () => toggleEditableGoal()

    const onFinish = () => console.log('finish goal')

    return (
        <div className='flex w-full flex-auto flex-col items-center justify-between p-4'>
            <div className='flex w-full items-start'></div>
            <div className='flex flex-auto'></div>
            <div className='flex w-full items-end justify-between'>
                <span className='material-icons-round rotate-180 cursor-pointer' onClick={removeEditableGoal}>
                    forward
                </span>
                <RdButton type='primary' className='rounded-lg font-bold' onClick={onFinish}>
                    Finish
                </RdButton>
            </div>
        </div>
    )
})
