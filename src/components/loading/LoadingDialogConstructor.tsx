import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { IconInfiniteLoading } from '@/assets/icons'

export const LoadingDialogGlobal = observer(() => {
    const { loading } = useRootStore()

    return <LoadingDialogConstructor loading={loading} />
})

export const LoadingDialogLocal: React.FC<{ loading: boolean }> = ({ loading = false }) => {
    return <LoadingDialogConstructor loading={loading} />
}

const LoadingDialogConstructor: React.FC<{ loading: boolean }> = ({ loading }) => {
    return (
        <Transition appear show={loading} as={Fragment}>
            <Dialog as='div' style={{ zIndex: 900 }} className='font-kzen relative z-[60]' onClose={() => undefined}>
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
                                className={`relative mx-auto flex w-fit transform items-center justify-center bg-transparent transition-all `}
                            >
                                <IconInfiniteLoading
                                    width={100}
                                    height={100}
                                    className='animate-opacity-5 text-blue-700'
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
