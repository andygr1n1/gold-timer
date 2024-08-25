import { observer } from 'mobx-react-lite'
import { useFetchNotesLabels } from '../../service/useFetchNotesLabels'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'
import { NoteLabelEditorItem } from './components/NoteLabelEditorItem'

export const NotesLabelsEditor: React.FC = observer(() => {
    const { isLoading, notesLabels } = useFetchNotesLabels()
    return (
        <div className='flex flex-col w-[calc(100%-8px)] h-full pr-2 relative overflow-auto scrollbar-thumb-blue-500/50 scrollbar-track-global-bg scrollbar-thin'>
            {isLoading && <XSkeleton length={5} />}
            {notesLabels.map((label) => (
                <NoteLabelEditorItem key={label.id} label={label} />
            ))}
        </div>
    )
})
