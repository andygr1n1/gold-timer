import { IXModal } from '../types'
import { CloseIcon } from './CloseIcon'

export const XModalCustomBody: React.FC<IXModal> = ({ closeIcon, onCancel, customBody }) => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='x-modal-body bg-transparent flex-col relative flex w-full'>
                {closeIcon && <CloseIcon onCancel={onCancel} />}
                {customBody}
            </div>
        </div>
    )
}
