import { cn } from '@/helpers/cn'
import { IXModal } from '../types'
import { CloseIcon } from './CloseIcon'
import { Header } from './Header'

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
                {closeIcon && <CloseIcon onCancel={onCancel} />}
                <div className='overflow-scroll py-4 scrollbar-thumb-blue-600 scrollbar-track-transparent scrollbar-thin'>
                    <div className='max-w-[calc(450px)] mx-auto w-[calc(100%-32px)] h-full flex flex-col'>
                        {title && <Header title={title} />}
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
