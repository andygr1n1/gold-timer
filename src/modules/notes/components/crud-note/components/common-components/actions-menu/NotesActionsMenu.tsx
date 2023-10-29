import { observer } from 'mobx-react-lite'
import { INote$ } from '@/modules/notes/mst/types'
import { ToggleEditNote } from './components/ToggleEditNote'
import { DeleteNote } from './components/DeleteNote'

export const NotesActionsMenu: React.FC<{ note: INote$ }> = observer(({ note }) => {
    return (
        <>
            <div className='relative flex w-full flex-wrap items-center justify-center gap-4'>
                <ToggleEditNote note={note} />
                <DeleteNote note={note} />
            </div>
        </>
    )
})
