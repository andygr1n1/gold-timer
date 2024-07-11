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
import { KzenEditor } from '@/components-x/x-rte'

export const Note: React.FC<{ note: INoteSchema; isMobile: MEDIA_QUERY_VALUES_ENUM }> = observer(
    ({ note, isMobile }) => {
        const { popoverState, setPopoverState } = useTogglePopoverState()

        return (
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
                            <div className='text-[10px] opacity-80 font-semibold cursor-default text-cText underline'>
                                {format(note.created_at, 'dd MMM, yyyy')}
                            </div>
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
                                        startIcon={<IconArchive width={24} height={24} className='text-violet-600' />}
                                    />
                                )}
                                {note.deleted_at && (
                                    <StyledButton
                                        className='!pointer-events-none'
                                        size='small'
                                        variant='text'
                                        startIcon={<IconDeleteTemp width={24} height={24} className='text-gray-700 ' />}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                    {!!note.tag && <NoteTagsList note={note} />}

                    <KzenEditor
                        key={note.description}
                        showToolbar={false}
                        isLoading={false}
                        content={note.description}
                        readOnly={true}
                        placeholder='Description'
                    />
                </div>
            </XDropdown>
        )
    },
)
