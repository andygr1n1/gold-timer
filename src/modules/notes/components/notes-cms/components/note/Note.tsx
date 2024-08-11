import { observer } from 'mobx-react-lite'
import { format } from 'date-fns'
import { NoteTagsList } from '../../../../shared-components/NoteTagsList'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { NoteContextMenu } from './NoteContextMenu'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconArchive } from '@/assets/icons/IconArchive'
import { IconDeleteTemp, IconHeart } from '@/assets/icons'
import { cn } from '@/helpers/cn'
import { MEDIA_QUERY_VALUES_ENUM } from '@/hooks/useMatchMedia.hook'
import { INoteSchema } from '../../../../shared-services/types'
import { XTiptap } from '@/components-x/x-tiptap/XTiptap'

export const Note: React.FC<{ note: INoteSchema; isMobile: MEDIA_QUERY_VALUES_ENUM }> = observer(
    ({ note, isMobile }) => {
        const { popoverState, setPopoverState } = useTogglePopoverState()

        return (
            <div className='relative'>
                {note.created_at && (
                    <div className='text-[10px] left-0 -top-4 absolute opacity-70 font-semibold cursor-default text-cText'>
                        {format(note.created_at, 'dd MMMM')}
                    </div>
                )}
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
                    overflow-auto rounded-lg p-5 hover:scale-105 duration-300`,
                        )}
                        onContextMenu={() => {
                            setPopoverState(!popoverState)
                        }}
                        key={note.id}
                    >
                        {note.created_at && (
                            <div className='flex justify-between items-center min-h-10'>
                                {!!note.tag && <NoteTagsList note={note} />}
                                <div className='flex gap items-center'>
                                    {note.is_favorite && (
                                        <StyledButton
                                            className='!pointer-events-none'
                                            size='small'
                                            variant='text'
                                            startIcon={<IconHeart width={24} height={24} className='text-rose-500' />}
                                        />
                                    )}
                                    {note.archived && (
                                        <StyledButton
                                            className='!pointer-events-none'
                                            size='small'
                                            variant='text'
                                            startIcon={
                                                <IconArchive width={24} height={24} className='text-violet-600' />
                                            }
                                        />
                                    )}
                                    {note.deleted_at && (
                                        <StyledButton
                                            className='!pointer-events-none'
                                            size='small'
                                            variant='text'
                                            startIcon={
                                                <IconDeleteTemp width={24} height={24} className='text-gray-700 ' />
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        <XTiptap isLoading={false} content={note.description} readonly={true} />
                    </div>
                </XDropdown>
            </div>
        )
    },
)
