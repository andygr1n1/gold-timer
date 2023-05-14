import { useGoalsStore } from '@/StoreProvider'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { EditableGoalMode } from './components/editable-goal-mode/EditableGoalMode'
import { GoalsCollapse } from './GoalsCollapse'
import { cast } from 'mobx-state-tree'
import { GoalsListModalTitle } from './components/GoalsListModalTitle'
import { XModal } from '@/components-x/x-modal/XModal'

interface IBaseState {
    is_open: boolean
    force_edit: boolean
}

export const GoalsListModalState$$: IBaseState = observable({ is_open: false, force_edit: false })
export const toggleGoalsListModalVisibility = action((options: { force_edit: boolean } = { force_edit: false }) => {
    if (GoalsListModalState$$.force_edit) {
        GoalsListModalState$$.is_open = false
        GoalsListModalState$$.force_edit = false
        return
    }

    if (options.force_edit) {
        GoalsListModalState$$.force_edit = options.force_edit
    }

    GoalsListModalState$$.is_open = !GoalsListModalState$$.is_open
})

export const GoalsListModal: React.FC = observer(() => {
    return (
        <XModal
            height='h-[80vh]'
            title={<GoalsListModalTitle />}
            open={GoalsListModalState$$.is_open}
            onCancel={toggleGoalsListModalVisibility}
        >
            {GoalsListModalState$$.is_open ? <Body /> : null}
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
