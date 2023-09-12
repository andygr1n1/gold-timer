import { Icon } from '@iconify/react'
import { Popover } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { NoteMenuContent } from './NoteMenuContent'
import { INote$ } from '../../../mst/types'

export const NoteMenu: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const [popoverState, setPopoverState] = useState(false)

    return (
        <Popover
            destroyTooltipOnHide
            open={popoverState}
            onOpenChange={() => setPopoverState(!popoverState)}
            trigger={['click']}
            overlayClassName=''
            className=''
            content={<NoteMenuContent note={note} setPopoverState={setPopoverState} />}
            placement='bottomRight'
            showArrow={false}
        >
            <div className='flex min-w-[10px] items-center justify-center'>
                <Icon
                    icon='simple-line-icons:options-vertical'
                    className='!text-cText cursor-pointer opacity-40 duration-300 hover:text-blue-200 hover:opacity-100 '
                />
            </div>
        </Popover>
    )
})
