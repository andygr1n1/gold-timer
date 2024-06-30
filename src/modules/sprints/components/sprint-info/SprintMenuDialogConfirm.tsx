// import { useSprintsStore } from '@/modules/app/mst/StoreProvider'
// import { DialogConfirm } from '@/components/dialog-confirm/DialogConfirm'
// import { observer } from 'mobx-react-lite'
// import { ReactNode } from 'react'

// export const SprintMenuDialogConfirm = observer(() => {
//     const { deleteSelectedSprint, restartSelectedSprint, selected_sprint, onChangeField } = useSprintsStore()
//     const restartSprint = selected_sprint?.menu_action === 'restart'

//     const onOk = () => {
//         if (!selected_sprint || !selected_sprint?.menu_action) return
//         restartSprint ? restartSelectedSprint(selected_sprint) : deleteSelectedSprint(selected_sprint)
//     }

//     const generateDialogTitle = (): ReactNode => {
//         return (
//             <div className='text-center leading-8'>{`The sprint will be ${
//                 restartSprint ? 'restarted' : 'deleted'
//             }. Are you sure?`}</div>
//         )
//     }

//     const onCancel = () => onChangeField('selected_sprint', undefined)

//     return (
//         <DialogConfirm
//             title={generateDialogTitle()}
//             onCancel={onCancel}
//             onOk={onOk}
//             open={!!selected_sprint?.menu_action}
//         />
//     )
// })

export {}
