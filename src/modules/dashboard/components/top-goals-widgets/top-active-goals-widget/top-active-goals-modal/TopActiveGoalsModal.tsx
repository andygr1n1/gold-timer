import { RdModal } from '@/components-antd-redesign/antrd-modal/AntrdModal'
import { useGoalsStore } from '@/StoreProvider'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { EditableGoalMode } from './components/editable-goal-mode/EditableGoalMode'
import { GoalsCollapse } from './GoalsCollapse'
import { cast } from 'mobx-state-tree'

interface IBaseState {
    is_open: boolean
}

export const modalState: IBaseState = observable({ is_open: false })
export const toggleModalState = action(() => {
    modalState.is_open = !modalState.is_open
})

export const TopActiveGoalsModal: React.FC = observer(() => {
    const { editable_goal } = useGoalsStore()

    return (
        <RdModal
            title={<div>{editable_goal ? 'Goal Creator Mode' : 'Active Goals'}</div>}
            open={modalState.is_open}
            // open={true}
            footer={null}
            onOk={toggleModalState}
            onCancel={toggleModalState}
            destroyOnClose
        >
            <Body />
        </RdModal>
    )
})

const Body = observer(() => {
    const { editable_goal, onChangeField } = useGoalsStore()

    useEffect(() => {
        return () => {
            onChangeField('active_collapse_key', '')
            onChangeField('new_goal', cast({}))
            onChangeField('editable_goal', undefined)
    }
    }, [])

    return editable_goal ? (
        <EditableGoalMode />
    ) : (
        <div className='flex h-[70vh] flex-auto flex-col'>
            <div className='relative flex w-full flex-col gap-5 '>
                <div className='flex flex-col gap-2'>
                    <GoalsCollapse />
                </div>
            </div>
        </div>
    )
})
