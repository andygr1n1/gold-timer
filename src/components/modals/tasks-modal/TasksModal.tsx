import { RdModal } from '@/components-antd-redesign/antrd-modal/AntrdModal'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'

interface IBaseState {
    is_open: boolean
}

export const tasksModalState: IBaseState = observable({ is_open: false })
export const toggleTasksModalVisibility = action(() => {
    tasksModalState.is_open = !tasksModalState.is_open
})

export const TasksModal: React.FC = observer(() => {
    return (
        <RdModal
            title={'Tasks'}
            open={tasksModalState.is_open}
            footer={null}
            onOk={toggleTasksModalVisibility}
            onCancel={toggleTasksModalVisibility}
            width={'70vw'}
        >
            <div className='flex flex-auto flex-col'>
                <div className='relative flex h-full w-full flex-col gap-5 overflow-auto'>
                    <span>- kzen</span>
                    <span>{`- kzen [react-native]`}</span>
                    <span>- myj </span>
                    <span>- woa </span>
                    <span>- taketep</span>
                    <span>- sport</span>
                    <span>- meditation</span>
                    <span>- yoga</span>
                    <span>- web 3.0 | crypto</span>
                    <span> react-pro | react-query | use swr code and pray</span>
                    <span>{` all docs to electron && all notes to electron`}</span>
                    <span>grock algorithm</span>
                    <span> Norbekov - 1 000 000</span>
                    <span>Healer Book</span>
                    <span>miracle of no eat</span>
                </div>
            </div>
        </RdModal>
    )
})
