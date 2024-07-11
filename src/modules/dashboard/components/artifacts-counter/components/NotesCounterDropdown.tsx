import { observer } from 'mobx-react-lite'

import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { ReactNode } from 'react'
import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNoteEditor$ } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/useNoteEditor.store'
import { editorMode } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/types'
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
    const { setStore } = useNoteEditor$()
    const addNote = () => {
        setStore({ editorMode: editorMode.new, id: null, open: true })
    }

    return (
        <XMenuDropdown>
            <XMenuItem onClick={addNote}>
                <StyledButton variant='text' size='small' startIcon={<IconNew width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>Add note</span>
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
})
