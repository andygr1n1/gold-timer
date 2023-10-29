import { observer } from 'mobx-react-lite'
import { useNotesStore } from '@/StoreProvider'
import { NoteTagInput } from '../crud-note/components/common-components/NoteTagInput'
import { NoteDescriptionInput } from '../crud-note/components/common-components/NoteDescriptionInput'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

export const CreateNewNoteDashboard: React.FC = observer(() => {
    const { createWidgetNewNote, widget_new_note } = useNotesStore()

    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])

    return isLargeDesktop ? (
        <div className='flex flex-[50%] flex-col gap-7'>
            <div className='bg-global-2-bg m-auto flex h-[399px]  w-[calc(100%-80px)]  max-w-[400px] flex-col gap-5 rounded-md p-10'>
                <div className='flex flex-auto flex-col'>
                    <NoteDescriptionInput note={widget_new_note} />
                    <NoteTagInput note={widget_new_note} />
                </div>
                <StyledButton
                    onClick={() => {
                        createWidgetNewNote()
                    }}
                    size='extraLarge'
                    disabled={!widget_new_note?.description.trim().length}
                >
                    Save Note
                </StyledButton>
            </div>
        </div>
    ) : null
})
