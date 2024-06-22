import { useNotesStore } from '@/modules/app/mst/StoreProvider'
import { observer } from 'mobx-react-lite'

export const NotesFiltersTextHelper: React.FC = observer(() => {
    const {
        notes_filter$: { isShowArchivedMode, isShowDeletedMode, isShowActiveMode },
    } = useNotesStore()
    const focusWord = isShowArchivedMode ? 'archived' : isShowDeletedMode ? 'deleted' : ''

    return !isShowActiveMode ? (
        <div className='text-cText flex w-full justify-start  '>
            <div className='w-fit text-center opacity-70 lg:text-start '>
                You are looking now at {focusWord} notes
                {isShowDeletedMode && '. You have 30 days until they will disappear'}
            </div>
        </div>
    ) : null
})
