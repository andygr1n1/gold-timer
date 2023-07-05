import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { observer } from 'mobx-react-lite'
import { XButton } from '@/components-x/x-button/XButton'
import { Icon } from '@iconify/react'
import { CreateNewNote } from './components/CreateNewNote'
import { useTasksStore } from '@/StoreProvider'
import { CreateNewTaskWidgetDialog } from './CreateNewTaskWidgetDialog'

export const CreateNewTaskWidget: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    return isDesktop ? (
        <div className='flex h-[330px] w-full max-w-[260px] rounded-md bg-global-bg p-5'>
            <CreateNewNote />
        </div>
    ) : (
        <div
            className='
                        flex w-[280px] max-w-[600px] justify-center rounded-md bg-global-bg 
                        2xl:my-5
                        2xl:max-h-[210px] 2xl:w-[260px] 2xl:flex-col 2xl:flex-nowrap 2xl:p-5
                    '
        >
            <CreateNewTaskAction />
        </div>
    )
})

const CreateNewTaskAction = observer(() => {
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
            <CreateNewTaskWidgetDialog />
        </div>
    )
})
