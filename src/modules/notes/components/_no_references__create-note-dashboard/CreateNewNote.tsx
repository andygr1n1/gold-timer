import { observer } from 'mobx-react-lite'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { NewNoteInput } from './components/NewNoteInput'
import { TagInput } from './components/TagInput'
import { useNotesStore } from '@/StoreProvider'

export const CreateNewNote: React.FC = observer(() => {
    const { createWidgetNewNote, widget_new_note } = useNotesStore()

    return (
        <div className='flex max-h-[350px] min-h-[350px] flex-[100%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 2lg:flex-[45%]'>
            <div className='bg-global-bg-plasma m-auto flex h-[calc(100%-12px)] w-full flex-col gap-5 rounded-md py-2  '>
                <div className='m-auto flex max-h-[330px] w-full max-w-[380px]  flex-col gap-5 '>
                    <div className='flex w-full flex-auto flex-col gap-5 bg-inherit '>
                        <NewNoteInput />
                        <TagInput />
                    </div>
                    <div className='relative w-full'>
                        <StyledButton
                            onClick={() => {
                                createWidgetNewNote()
                            }}
                            size='extraLarge'
                            className='!w-full'
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
    )
})
