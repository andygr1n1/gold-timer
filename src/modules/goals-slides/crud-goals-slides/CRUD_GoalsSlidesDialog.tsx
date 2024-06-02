import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalsSlidesStore } from '@/modules/app/mst/StoreProvider'
import { GoalsSlides } from './components/GoalsSlides'
import { UploadGoalSlide } from './components/UploadGoalSlide'

export const CRUD_GoalsSlidesDialog: React.FC = observer(function CRUD_GoalsSlidesDialog() {
    const { onChangeField, is_crud_open } = useGoalsSlidesStore()

    const onCancel = () => {
        onChangeField('is_crud_open', false)
    }

    return (
        <XModal
            open={!!is_crud_open}
            onCancel={onCancel}
            title={
                <div tabIndex={0} className='flex items-center justify-center gap-5'>
                    Goals Slides
                </div>
            }
        >
            <div className='flex flex-col gap-5'>
                <UploadGoalSlide />
                <GoalsSlides />
            </div>
        </XModal>
    )
})
