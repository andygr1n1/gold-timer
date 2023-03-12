import { RdModal } from '@/components-rd/rdmodal/RdModal'
import { useGoalsStore } from '@/StoreProvider'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { EditableGoalMode } from './components/editable-goal-mode/EditableGoalMode'
import { GoalsCollapse } from './GoalsCollapse'
import { cast } from 'mobx-state-tree'
import { GoalsListModalTitle } from './components/GoalsListModalTitle'

interface IBaseState {
    is_open: boolean
}

export const modalState: IBaseState = observable({ is_open: false })
export const toggleModalState = action(() => {
    modalState.is_open = !modalState.is_open
})

export const GoalsListModal: React.FC = observer(() => {
    return (
        <RdModal
            title={<GoalsListModalTitle />}
            open={modalState.is_open}
            footer={null}
            onOk={toggleModalState}
            onCancel={toggleModalState}
            destroyOnClose
        >
            <Body />
        </RdModal>
    )
})

const Body: React.FC = observer(() => {
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
