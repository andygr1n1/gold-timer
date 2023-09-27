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
                                    height || 'h-fit'
                                } bg-global-2-bg relative mx-auto max-h-[calc(100vh-180px)] w-full max-w-[360px] transform overflow-auto rounded-md p-10 py-20 shadow-xl shadow-black/30 transition-all md:max-h-[80vh] md:py-10`}
                            >
                                {/* <Icon
                                    icon='mdi:close'
                                    onClick={onCancel}
                                    width={30}
                                    height={30}
                                    className='text-cText absolute right-6 top-[34px] z-10 cursor-pointer opacity-70 duration-300 hover:font-bold hover:text-red-500  hover:opacity-100'
                                /> */}
                                {header && (
                                    <div className='relative mb-5 flex items-center justify-center'>
                                        <Dialog.Title as='div' className='text-cText flex bg-transparent text-2xl '>
                                            {title}
                                        </Dialog.Title>
                                    </div>
                                )}
                                <div className='flex h-full w-full flex-col rounded-md'>{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
