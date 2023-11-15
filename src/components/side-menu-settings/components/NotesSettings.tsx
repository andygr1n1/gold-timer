import { useRootStore } from '@/StoreProvider'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { NotesTagsSelect } from '@/modules/notes/components/filters/NotesTagsSelect'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NotesSettings: React.FC = observer(() => {
    const {
        side_menu$: { onChangeField: onChangeFieldSideMenu$ },
        notes$: { openNoteCreateMode },
    } = useRootStore()

    const onClose = () => onChangeFieldSideMenu$('visible', false)

    const onCreateNote = () => {
        onClose()
        openNoteCreateMode()
    }

    return (
        <>
            <div className='flex w-full justify-center text-gray-400 '>Create</div>
            <XMenuDivider />
            <button onClick={onCreateNote} className='flex items-center gap-2'>
                <Icon icon='fluent:task-list-square-ltr-16-filled' width={20} height={20} />
                <span>Note</span>
            </button>
            <XMenuDivider />
            <div className='flex w-full justify-center text-gray-400'>Tags</div>
            <XMenuDivider />
            <div className='w-[calc(100%-20px)]'>
                <NotesTagsSelect />
            </div>
        </>
    )
})
