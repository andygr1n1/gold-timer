import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/StoreProvider'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { ReactNode } from 'react'
import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
export const NotesCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottom'
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
            <XMenuItem onClick={() => openNoteCreateMode()}>
                <StyledButton variant='text' size='small' startIcon={<IconNew width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>Add note</span>
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
})
