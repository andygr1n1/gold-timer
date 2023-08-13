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
            <div className='absolute -right-3 -top-4 flex min-w-[50px] rotate-90 items-center justify-center 2xl:static 2xl:rotate-0'>
                <Icon
                    icon='simple-line-icons:options-vertical'
                    className='cursor-pointer duration-300 hover:text-blue-200 '
                />
            </div>
        </Popover>
    )
})
