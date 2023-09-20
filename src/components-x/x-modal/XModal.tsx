import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { Fragment, ReactNode } from 'react'

export const XModal: React.FC<{
    open: boolean
    title?: ReactNode
    onCancel: () => void
    children: ReactNode
    height?: string
    header?: boolean
}> = ({ height = '', onCancel, open, children, title = '', header = true }) => {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as='div' className='font-droid relative z-[60]' onClose={onCancel}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300 '
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0'>
                    <div className='flex min-h-full items-center justify-center'>
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
                                } bg-global-2-bg max-h-[75vh] w-full max-w-lg transform rounded-2xl p-6 pr-4 shadow-xl transition-all`}
                            >
                                <div className=' h-full w-[calc(100%-32px)] overflow-auto px-4'>
                                    {header && (
                                        <div className='relative flex items-center justify-center'>
                                            <Dialog.Title
                                                as='div'
                                                className='text-cText flex bg-transparent pb-5 pt-14'
                                            >
                                                {title}
                                            </Dialog.Title>
                                            <Icon
                                                icon='mdi:close'
                                                onClick={onCancel}
                                                className='text-cText absolute right-0 top-0 h-6 w-6 cursor-pointer text-xl duration-300 hover:font-bold  hover:text-red-500'
                                            />
                                        </div>
                                    )}
                                    <div>{children}</div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
