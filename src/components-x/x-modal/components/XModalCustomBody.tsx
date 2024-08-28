import { type IXModal } from '../types'
import { XModalCloseIcon } from './XModalCloseIcon'

export const XModalCustomBody: React.FC<IXModal> = ({ closeIcon, onCancel, customBody }) => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='x-modal-body bg-transparent flex-col relative flex w-full'>
                {closeIcon && <XModalCloseIcon onCancel={onCancel} />}
                {customBody}
            </div>
        </div>
    )
}
