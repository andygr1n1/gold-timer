import { useNotesStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const ActiveTagsList: React.FC = observer(() => {
    const {
        notes_filter$: { selected_tags },
    } = useNotesStore()
    return selected_tags.length ? (
        <div className='bg-global-2-bg pointer-events-none flex w-[calc(100%-32px)] flex-wrap justify-center gap-3 rounded-md p-4'>
            {selected_tags.map((tag) => (
                <div key={tag} className='font-bold  opacity-70'>{`#${tag}`}</div>
            ))}
        </div>
    ) : null
})
