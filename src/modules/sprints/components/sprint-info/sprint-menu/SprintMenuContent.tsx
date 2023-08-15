import { PopoverItem } from '@/components/popover-settings/PopoverItem'
import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { Dispatch, SetStateAction } from 'react'
import { useSprintsStore } from '@/StoreProvider'

export const SprintMenuContent: React.FC<{ sprint: ISprint$; setPopoverState: Dispatch<SetStateAction<boolean>> }> =
    observer(({ sprint, setPopoverState }) => {
        const { activateEditSprintCreator, selectSprintAndActivateMenuAction } = useSprintsStore()

        return (
            <div className='flex min-w-[120px] flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div className='text-gray-400'>Actions</div>
                    <div className='ml-2 flex flex-col gap-2'>
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                            }}
                            icon='fluent:open-24-filled'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Open'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                activateEditSprintCreator(sprint)
                            }}
                            icon='uil:edit'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Edit'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                selectSprintAndActivateMenuAction(sprint, 'restart')
                            }}
                            icon='solar:restart-circle-broken'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Restart'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                selectSprintAndActivateMenuAction(sprint, 'delete')
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
            </div>
        )
    })
