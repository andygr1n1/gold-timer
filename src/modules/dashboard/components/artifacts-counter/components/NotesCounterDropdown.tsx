import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/StoreProvider'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { ReactNode } from 'react'
import { IconNew } from '@/assets/icons'
export const NotesCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottomLeft'
            overlayClassName='!z-[55]'
        >
            <div>{button}</div>
        </XDropdown>
    )
})

const DropdownRender = observer(() => {
    const {
        notes$: { openNoteCreateMode },
    } = useRootStore()
    return (
        <XMenuDropdown>
            <XMenuItem
                className='!opacity-100'
                onClick={() => {
                    openNoteCreateMode()
                }}
            >
                <IconNew width={24} height={24} className='duration-300 group-hover:text-blue-600' />
                <span> Add note</span>
            </XMenuItem>
        </XMenuDropdown>
    )
})
