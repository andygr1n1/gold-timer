import { RdModal } from '@/components-antd-redesign/antrd-modal/AntrdModal'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'

interface IBaseState {
    is_open: boolean
}

export const goalsFilterState: IBaseState = observable({ is_open: false })
export const toggleGoalsFilterModalVisibility = action(() => {
    goalsFilterState.is_open = !goalsFilterState.is_open
})

export const GoalsFilterModal: React.FC = observer(() => {
    return (
        <RdModal
            title={'Filter Mode'}
            open={goalsFilterState.is_open}
            footer={null}
            onOk={toggleGoalsFilterModalVisibility}
            onCancel={toggleGoalsFilterModalVisibility}
            width={'70vw'}
        >
            <div className='flex flex-auto flex-col'>
                <div className='relative flex h-full w-full gap-5 overflow-auto'>F I L T E R</div>
            </div>
        </RdModal>
    )
})
