import { Popover } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { PopoverItem } from '@/components/popover-settings/PopoverItem'
import { Dispatch, SetStateAction } from 'react'
import { useSprintsStore } from '@/app/StoreProvider'
import { ISprint$ } from '@/modules/sprints/mst/types'
import { IconMenu } from '@/assets/icons'
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
                <IconMenu width={24} height={24} className='cursor-pointer duration-300 hover:text-blue-200 ' />
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
                            className='hover:text-blue-600'
                            title='Open'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                activateEditSprintCreator(sprint)
                            }}
                            className='hover:text-blue-600'
                            title='Edit'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                selectSprintAndActivateMenuAction(sprint, 'restart')
                            }}
                            className='hover:text-blue-600'
                            title='Restart'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                selectSprintAndActivateMenuAction(sprint, 'delete')
                            }}
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
