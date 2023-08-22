import { ISprint$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { Popover } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { SprintMenuContent } from './SprintMenuContent'

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
