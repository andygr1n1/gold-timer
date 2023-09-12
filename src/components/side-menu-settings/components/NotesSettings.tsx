import { useRootStore } from '@/StoreProvider'
import { XDivider } from '@/components-x/x-divider/XDivider'
import { NotesTagsSelect } from '@/modules/notes/components/filters/NotesTagsSelect'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NotesSettings: React.FC = observer(() => {
    const {
        side_menu$: { onChangeField: onChangeFieldSideMenu$ },
        notes$: { activateCreateMode: activateCreateEditMode },
    } = useRootStore()

    const onClose = () => onChangeFieldSideMenu$('visible', false)

    const onCreateNote = () => {
        onClose()
        activateCreateEditMode()
    }

    return (
        <>
            <div className='flex w-full justify-center text-gray-400 '>Create</div>
            <XDivider className='w-[125px] bg-gray-700' />
            <button onClick={onCreateNote} className='flex items-center gap-2'>
                <Icon icon='fluent:task-list-square-ltr-16-filled' width={20} height={20} />
                <span>Note</span>
            </button>
            <XDivider className='w-[125px] bg-transparent' />
            <div className='flex w-full justify-center text-gray-400'>Tags</div>
            <XDivider className='w-[125px] bg-gray-700' />
            <div className='w-[calc(100%-20px)]'>
                <NotesTagsSelect />
            </div>
        </>
    )
})
