import { useGoalsManagerStore, useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { EditableGoalMode } from './components/editable-goal-mode/EditableGoalMode'
import { GoalsCollapse } from './GoalsCollapse'
import { cast } from 'mobx-state-tree'
import { GoalsListModalTitle } from './components/GoalsListModalTitle'
import { XModal } from '@/components-x/x-modal/XModal'

export const GoalsManagerMw: React.FC = observer(() => {
    const { visible, forceClose } = useGoalsManagerStore()
    return (
        <XModal height='h-[80vh]' title={<GoalsListModalTitle />} open={visible} onCancel={() => forceClose()}>
            {visible ? <Body /> : null}
        </XModal>
    )
})

const Body: React.FC = observer(() => {
    const { editable_goal, onChangeField } = useGoalsStore()

    useEffect(() => {
        return () => {
            onChangeField('active_collapse_key', '')
            onChangeField('new_goal', cast({}))
            onChangeField('editable_goal', undefined)
            onChangeField('goal_on_delete', undefined)
        }
    }, [])

    return editable_goal ? (
        <EditableGoalMode />
    ) : (
        // <div className='flex h-[70vh] flex-auto flex-col'>
        <div className='relative flex w-full flex-col gap-5 '>
            <div className='flex flex-col gap-2 overflow-auto'>
                <GoalsCollapse />
            </div>
        </div>
        // </div>
    )
})
