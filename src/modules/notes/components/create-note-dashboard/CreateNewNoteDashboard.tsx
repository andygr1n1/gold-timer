import { observer } from 'mobx-react-lite'
import { useNotesStore } from '@/StoreProvider'
import { NoteTagInput } from '../crud-note/components/common-components/NoteTagInput'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { NewNoteInput } from './components/NewNoteInput'
import { TagInput } from './components/TagInput'

export const CreateNewNoteDashboard: React.FC = observer(() => {
    const { createWidgetNewNote, widget_new_note } = useNotesStore()

    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])

    return isLargeDesktop ? (
        <div className='flex max-h-[370px] flex-[45%]'>
            <div className='bg-global-bg-plasma m-auto flex h-full  w-[calc(100%)] flex-col gap-5 rounded-md  '>
                <div className='m-auto flex max-h-[330px] max-w-[380px] flex-col gap-5 '>
                    <div className='flex flex-auto flex-col'>
                        <NewNoteInput />
                        <div>
                            <TagInput />
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <StyledButton
                            onClick={() => {
                                createWidgetNewNote()
                            }}
                            size='extraLarge'
                            className='w-full'
                            disabled={!widget_new_note?.descriptionLength}
                        >
                            Save Note
                        </StyledButton>
                        {!widget_new_note?.descriptionLength && (
                            <div
                                id={'saveNoteDisabledTooltip'}
                                className='pointer-events-auto absolute left-0 top-0 z-20 h-full w-full rounded-lg bg-transparent
                        '
                            />
                        )}
                        {!widget_new_note?.descriptionLength && (
                            <XTooltip anchorSelect='#saveNoteDisabledTooltip'>Description is empty</XTooltip>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : null
})
