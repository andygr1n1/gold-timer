import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { Fragment, ReactNode, useRef } from 'react'

export const XModal: React.FC<{
    open: boolean
    title?: ReactNode
    onCancel: () => void
    children: ReactNode
    height?: string
    header?: boolean
}> = ({ height = '', onCancel, open, children, title = '', header = true }) => {
    const cancelButtonRef = useRef<HTMLButtonElement | null>(null)
    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as='div' className='font-neon relative z-[60]' onClose={onCancel}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300 '
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
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
                                        height || 'h-[75vh]'
                                    } bg-global-2-bg  max-h-[75vh]  w-full max-w-md  transform overflow-auto rounded-2xl p-6 text-left align-middle shadow-xl transition-all`}
                                >
                                    {header && (
                                        <Dialog.Title
                                            as='h3'
                                            className='border-b-solid text-cText top-[-24px]
                                                z-50 mb-2  flex items-center justify-between gap-5 border-b
                                                border-b-gray-500/20 bg-transparent py-2 leading-6'
                                        >
                                            <span>{title}</span>
                                            <button ref={cancelButtonRef}>
                                                <Icon
                                                    icon='mdi:close'
                                                    onClick={onCancel}
                                                    className='cursor-pointer text-xl text-gray-500 hover:font-bold hover:text-black'
                                                />
                                            </button>
                                        </Dialog.Title>
                                    )}
                                    <div className='my-2 h-[calc(100%-60px)]'>{children}</div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
