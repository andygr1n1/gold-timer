import { Icon } from '@iconify/react'
import { Popover } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { PopoverItem } from '@/components/popover-settings/PopoverItem'
import { Dispatch, SetStateAction } from 'react'
import { useSprintsStore } from '@/StoreProvider'
import { ISprint$ } from '@/modules/sprints/mst/types'
export const SprintMenu: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const [popoverState, setPopoverState] = useState(false)

    return (
        <Popover
            destroyTooltipOnHide
            open={popoverState}
            onOpenChange={() => setPopoverState(!popoverState)}
            trigger={['click']}
            overlayClassName=''
            className=''
            content={<SprintMenuContent sprint={sprint} setPopoverState={setPopoverState} />}
            placement='bottom'
        >
            <div className='flex min-w-[50px] items-center justify-center'>
                <Icon
                    icon='simple-line-icons:options-vertical'
                    className='cursor-pointer duration-300 hover:text-blue-200 '
                />
            </div>
        </Popover>
    )
})

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
