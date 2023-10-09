import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

export const XModal: React.FC<{
    open: boolean
    title?: ReactNode
    onCancel: () => void
    children: ReactNode
    height?: string
    header?: boolean
    zIndex?: number
}> = ({ height = '', onCancel, open, children, title = '', header = true, zIndex = 60 }) => {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as='div' style={{ zIndex }} className='font-kzen relative z-[60]' onClose={onCancel}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300 '
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-gray-900 bg-opacity-90' />
                </Transition.Child>

                {children && open && (
                    <div className='fixed inset-0 '>
                        <div className='flex min-h-full items-center justify-center '>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel
                                    className={`${
                                        height || 'h-fit'
                                    } bg-global-2-bg-plasma relative mx-auto max-h-[80vh] w-full max-w-[550px] transform rounded-lg shadow-xl  shadow-black/30 backdrop-blur-md transition-all `}
                                >
                                    <div className='m-auto max-h-[80vh] w-full max-w-[540px] overflow-auto'>
                                        <div className='m-auto flex w-[calc(100%-80px)] max-w-[360px] flex-col p-10  '>
                                            {header && (
                                                <div className='relative  mb-5 flex items-center justify-center'>
                                                    <Dialog.Title
                                                        as='div'
                                                        className='text-cText flex bg-transparent text-xl font-bold '
                                                    >
                                                        {title}
                                                    </Dialog.Title>
                                                </div>
                                            )}
                                            <div className='flex h-full w-full flex-col rounded-lg'>{children}</div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                )}
            </Dialog>
        </Transition>
    )
}
