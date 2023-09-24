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
    zIndex?: number
}> = ({ height = '', onCancel, open, children, title = '', header = true, zIndex = 60 }) => {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as='div' style={{ zIndex }} className='font-droid relative z-[60]' onClose={onCancel}>
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
                                    height || 'h-[80vh]'
                                } bg-global-2-bg max-h-[80vh] w-full max-w-lg transform bg-opacity-[98%] p-6 pr-4  shadow-xl shadow-black/30 transition-all`}
                            >
                                <div className='h-full w-[calc(100%-32px)] overflow-auto px-4'>
                                    {header && (
                                        <div className='relative flex items-center justify-center'>
                                            <Dialog.Title
                                                as='div'
                                                className='text-cText absolute top-3 flex bg-transparent opacity-70'
                                            >
                                                {title}
                                            </Dialog.Title>
                                            <Icon
                                                icon='mdi:close'
                                                onClick={onCancel}
                                                className='text-cText absolute right-0 top-3 cursor-pointer text-xl  opacity-70 duration-300 hover:font-bold hover:text-red-500  hover:opacity-100'
                                            />
                                        </div>
                                    )}
                                    <div className='mx-auto mt-14 h-[calc(100%-100px)] w-fit'>{children}</div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
