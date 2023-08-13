import { useSprintsStore } from '@/StoreProvider'
import { DialogConfirm } from '@/components/dialog-confirm/DialogConfirm'
import { ISprint$ } from '@/mst/types'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export const SprintMenuDialogConfirm: React.FC<{
    sprint: ISprint$
    onCancel: () => void
    dialogState: 'restart' | 'delete' | null
    setPopoverState: Dispatch<SetStateAction<boolean>>
}> = ({ sprint, dialogState, onCancel, setPopoverState }) => {
    const { deleteSelectedSprint, restartSelectedSprint } = useSprintsStore()
    const restartSprint = dialogState === 'restart'

    const handleDialogOk = () => {
        restartSprint ? restartSelectedSprint(sprint) : deleteSelectedSprint(sprint)
        onCancel()
        setPopoverState(false)
    }

    const generateDialogTitle = (): ReactNode => {
        return (
            <div className='text-center leading-8'>{`The sprint will be ${
                restartSprint ? 'restarted' : 'deleted'
            }. Are you sure?`}</div>
        )
    }

    return (
        <DialogConfirm title={generateDialogTitle()} onCancel={onCancel} onOk={handleDialogOk} open={!!dialogState} />
    )
}
