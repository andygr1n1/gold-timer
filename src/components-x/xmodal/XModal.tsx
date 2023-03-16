import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { Fragment, ReactNode } from 'react'

export const XModal: React.FC<{
    open: boolean
    title: ReactNode
    onCancel: () => void
    children: ReactNode
    height?: string
}> = ({ height = 'h-auto', onCancel, open, children, title = '' }) => {
    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as='div' className='relative z-10 font-neon' onClose={onCancel}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
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
                                    className={`${height} w-full  max-w-md transform  overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                                >
                                    <Dialog.Title
                                        as='h3'
                                        className='border-b-solid sticky -top-6 z-[1000] flex h-14 items-center justify-between gap-5 border-b border-b-gray-500/30 bg-white pb-2 leading-6 text-gray-900'
                                    >
                                        <span>{title}</span>
                                        <Icon
                                            icon='mdi:close'
                                            onClick={onCancel}
                                            className='cursor-pointer hover:text-xl hover:font-bold'
                                        />
                                    </Dialog.Title>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
