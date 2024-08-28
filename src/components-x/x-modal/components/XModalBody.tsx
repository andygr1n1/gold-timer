import { cn } from '@/helpers/cn'
import { type IXModal } from '../types'
import { XModalCloseIcon } from './XModalCloseIcon'
import { XModalHeader } from './XModalHeader'

export const XModalBody: React.FC<IXModal> = ({ fullHeight, closeIcon = true, onCancel, children, title }) => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div
                className={cn(
                    `x-modal-body bg-global-2-bg-plasma  flex-col relative flex w-full 
                max-w-[600px] rounded-lg shadow-xl shadow-black/30 backdrop-blur-md  max-h-[77vh]`,
                    fullHeight && 'h-[77vh]',
                )}
            >
                {closeIcon && <XModalCloseIcon onCancel={onCancel} />}
                {title && <XModalHeader title={title} />}
                <div className='overflow-y-auto py-4 m-[3px] scroll-style'>
                    <div className='max-w-[calc(450px)] mx-auto w-[calc(100%-32px)] h-full flex flex-col'>
                        <div
                            className={cn(
                                'flex mx-auto h-full w-full flex-col mb-5',
                                fullHeight && 'min-h-[calc(77vh-135px)]',
                            )}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
