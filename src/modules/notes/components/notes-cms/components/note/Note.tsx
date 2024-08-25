import { observer } from 'mobx-react-lite'
import { format } from 'date-fns'
import { NoteTagsList } from '../../../../shared-components/NoteTagsList'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { NoteContextMenu } from './NoteContextMenu'
import { cn } from '@/helpers/cn'
import { MEDIA_QUERY_VALUES_ENUM } from '@/hooks/useMatchMedia.hook'
import { INoteSchema } from '../../../../shared-services/types'
import { XTiptap } from '@/components-x/x-tiptap/XTiptap'
import { NoteLabel } from './components/NoteLabel'
import { NoteStatus } from './components/NoteStatus'

export const Note: React.FC<{ note: INoteSchema; isMobile: MEDIA_QUERY_VALUES_ENUM }> = observer(
    ({ note, isMobile }) => {
        const { popoverState, setPopoverState } = useTogglePopoverState()

        return (
            <div className='relative'>
                <XDropdown
                    open={popoverState}
                    onOpenChange={() => {
                        setPopoverState(!popoverState)
                    }}
                    trigger={['contextMenu', isMobile && 'click']}
                    dropdownRender={() => <NoteContextMenu onClose={() => setPopoverState(false)} note={note} />}
                >
                    <div
                        className={cn(
                            `bg-global-2-bg flex w-[calc(100%-40px)] max-w-[600px] flex-col gap-5
                    overflow-auto rounded-lg p-5 hover:scale-105 duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`,
                        )}
                        onContextMenu={() => {
                            setPopoverState(!popoverState)
                        }}
                        key={note.id}
                    >
                        <div className='flex justify-between items-center'>
                            <NoteLabel note={note} />
                            <NoteStatus note={note} />
                        </div>
                        {note.created_at && (
                            <div className='flex justify-between items-center min-h-10'>
                                {!!note.tag && <NoteTagsList note={note} />}
                            </div>
                        )}

                        <XTiptap key={note.description} isLoading={false} content={note.description} readonly={true} />

                        {note.created_at && (
                            <div className='text-xs opacity-80 font-semibold cursor-default text-cText'>
                                {format(note.created_at, 'dd MMMM yyyy')}
                            </div>
                        )}
                    </div>
                </XDropdown>
            </div>
        )
    },
)
