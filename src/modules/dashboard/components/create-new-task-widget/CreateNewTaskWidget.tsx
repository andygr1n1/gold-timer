import { observer } from 'mobx-react-lite'
import { XButton } from '@/components-x/x-button/XButton'
import { Icon } from '@iconify/react'
import { useTasksStore } from '@/StoreProvider'

//             <CreateNewTaskWidgetDialog />

export const CreateNewTaskAction = observer(() => {
    const { onChangeField } = useTasksStore()

    return (
        <div
            onClick={() => onChangeField('new_task_dialog', true)}
            className='
                    group mx-10 my-5 flex w-[260px] cursor-pointer items-center justify-center gap-5 rounded-lg bg-emerald-500
                    p-5 2xl:m-0 2xl:h-[125px] 2xl:w-auto 2xl:px-5'
        >
            <XButton
                title='create new task'
                className='flex  cursor-pointer flex-col items-center justify-center bg-emerald-600 p-2 focus:bg-emerald-700 active:bg-emerald-700 group-hover:bg-emerald-700 '
            >
                <Icon icon='ph:pen-fill' width={25} height={25} className='' />
            </XButton>
        </div>
    )
})
