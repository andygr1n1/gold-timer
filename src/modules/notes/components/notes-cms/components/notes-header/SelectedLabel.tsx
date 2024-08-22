import { IconFolder } from '@/assets/icons'
import { useLocation } from 'react-router-dom'
import { useFetchNotesLabels } from './components/note-label/notes-labels-dialog/service/useFetchNotesLabels'

export const SelectedLabel: React.FC = () => {
    const { data } = useFetchNotesLabels()
    const location = useLocation()
    const labelParam: string = location.state?.label
    const selectedNoteLabel = data.find((l) => l.id === labelParam)?.name
    return selectedNoteLabel ? (
        <div className='flex opacity-70 text-base items-center font-bold'>
            {selectedNoteLabel}
            <IconFolder className='w-5 h-5 px-3' />
        </div>
    ) : null
}
