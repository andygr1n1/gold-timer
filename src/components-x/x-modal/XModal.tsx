import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'

export const XModal: React.FC<{
    open: boolean
    title?: ReactNode
    onCancel: () => void
    children: ReactNode
    height?: string
    header?: boolean
    zIndex?: number
    fullHeight?: boolean
}> = ({ height = '', onCancel, open, children, title = '', header = true, zIndex = 121, fullHeight = false }) => {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as='div' style={{ zIndex }} className='font-kzen relative' onClose={onCancel}>
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
                                    className={clsx(
                                        height || 'h-fit',
                                        fullHeight && 'md:h-[85vh h-[77vh]',
                                        `bg-global-2-bg-plasma relative mx-auto max-h-[77vh] w-full max-w-[550px] transform rounded-lg shadow-xl 
                                    shadow-black/30 backdrop-blur-md transition-all
                                    md:max-h-[85vh]`,
                                    )}
                                >
                                    <div className='absolute right-1 top-[-32px] md:top-[-40px] '>
                                        <Icon
                                            icon='line-md:close-small'
                                            className={`h-7 w-7 cursor-pointer text-white/70 duration-300 hover:h-8 hover:w-8 hover:text-blue-500`}
                                            onClick={onCancel}
                                        />
                                    </div>
                                    <div
                                        className={clsx(
                                            'scrollbar-thumb-blue-500 scrollbar-track-global-3-bg scrollbar-thin m-auto max-h-[77vh] w-full max-w-[540px] overflow-auto md:max-h-[85vh]',
                                            fullHeight && 'md:h-[85vh h-[77vh]',
                                        )}
                                    >
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
