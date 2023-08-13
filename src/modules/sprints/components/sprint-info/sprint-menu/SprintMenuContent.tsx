import { PopoverItem } from '@/components/popover-settings/PopoverItem'
import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { Dispatch, SetStateAction, useState } from 'react'
import { SprintMenuDialogConfirm } from './SprintMenuDialogConfirm'

export const SprintMenuContent: React.FC<{ sprint: ISprint$; setPopoverState: Dispatch<SetStateAction<boolean>> }> =
    observer(({ sprint, setPopoverState }) => {
        const [dialogState, setDialogState] = useState<'restart' | 'delete' | null>(null)

        return (
            <div className='flex min-w-[120px] flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div className='text-gray-400'>Actions</div>
                    <div className='ml-2 flex flex-col gap-2'>
                        <PopoverItem
                            action={() => {
                                console.log('click')
                            }}
                            icon='fluent:open-24-filled'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Open'
                        />
                        <PopoverItem
                            action={() => {
                                console.log('click')
                            }}
                            icon='uil:edit'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Edit'
                        />
                        <PopoverItem
                            action={() => {
                                setDialogState('restart')
                            }}
                            icon='solar:restart-circle-broken'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Restart'
                        />
                        <PopoverItem
                            action={() => {
                                setDialogState('delete')
                            }}
                            icon='fluent:delete-dismiss-28-regular'
                            iconClassName='text-red-700'
                            className='hover:text-red-700'
                            title='Delete'
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
                {/*  */}
                {/* D I A L O G */}
                {/*  */}
                <SprintMenuDialogConfirm
                    setPopoverState={setPopoverState}
                    dialogState={dialogState}
                    onCancel={() => {
                        setDialogState(null)
                        setPopoverState(false)
                    }}
                    sprint={sprint}
                />
            </div>
        )
    })
