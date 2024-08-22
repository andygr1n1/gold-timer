import { observer } from 'mobx-react-lite'
import { useFetchNotesLabels } from '../service/useFetchNotesLabels'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'

export const NotesLabelsCRUD: React.FC = observer(() => {
    const { isLoading, data } = useFetchNotesLabels()
    return (
        <div>{isLoading ? <XSkeleton length={5} /> : data.map((label) => <div key={label.id}>{label.name}</div>)}</div>
    )
})
