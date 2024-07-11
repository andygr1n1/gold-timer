import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalsSlidesEditor$ } from '../stores/useGoalsSlidesEditor.store'
import { InsertGoalSlide } from './components/insert-goal-slide/InsertGoalSlide'

export const GoalsSlidesEditorDialog: React.FC = observer(function CRUD_GoalsSlidesDialog() {
    const { store, onClose: onCancel } = useGoalsSlidesEditor$()

    return (
        <XModal
            open={store.open}
            onCancel={onCancel}
            title={
                <div tabIndex={0} className='flex items-center justify-center gap-5'>
                    Goals Slides
                </div>
            }
        >
            {store.open && <InsertGoalSlide />}
        </XModal>
    )
})
