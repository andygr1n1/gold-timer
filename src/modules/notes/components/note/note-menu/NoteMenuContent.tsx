import { PopoverItem } from '@/components/popover-settings/PopoverItem'
import { observer } from 'mobx-react-lite'
import { Dispatch, SetStateAction } from 'react'
import { INote$ } from '../../../mst/types'
import { useNotesStore } from '@/StoreProvider'

export const NoteMenuContent: React.FC<{ note: INote$; setPopoverState: Dispatch<SetStateAction<boolean>> }> = observer(
    ({ note, setPopoverState }) => {
        const { openNoteEditMode } = useNotesStore()
        return (
            <div className='flex min-w-[120px] flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div className='ml-2 flex flex-col gap-2'>
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                            }}
                            icon='fluent:open-24-filled'
                            iconClassName='text-blue-600'
                            className='hover:text-blue-600'
                            title='Open'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                openNoteEditMode(note.id)
                            }}
                            icon='uil:edit'
                            iconClassName='text-blue-600'
                            className='hover:text-blue-600'
                            title='Edit'
                        />
                        {/* <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                note.selectAndSetDeleteMode()
                            }}
                            icon='fluent:delete-dismiss-28-regular'
                            iconClassName='text-red-700'
                            className='hover:text-red-700'
                            title='Delete'
                            width={18}
                            height={18}
                        /> */}
                    </div>
                </div>
            </div>
        )
    },
)
