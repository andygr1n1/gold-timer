import { PopoverItem } from '@/components/popover-settings/PopoverItem'
import { observer } from 'mobx-react-lite'
import { Dispatch, SetStateAction } from 'react'
import { INote$ } from '../../../mst/types'

export const NoteMenuContent: React.FC<{ note: INote$; setPopoverState: Dispatch<SetStateAction<boolean>> }> = observer(
    ({ note, setPopoverState }) => {
        return (
            <div className='flex min-w-[120px] flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div className='ml-2 flex flex-col gap-2'>
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                            }}
                            icon='fluent:open-24-filled'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Open'
                        />
                        <PopoverItem
                            action={() => {
                                setPopoverState(false)
                                note.activateCreateEditMode()
                            }}
                            icon='uil:edit'
                            iconClassName='text-colorPrimary'
                            className='hover:text-colorPrimary'
                            title='Edit'
                        />
                        <PopoverItem
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
                        />
                    </div>
                </div>
            </div>
        )
    },
)
