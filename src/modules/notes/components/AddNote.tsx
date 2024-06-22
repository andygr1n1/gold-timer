import { useNotesStore } from '@/modules/app/mst/StoreProvider'
import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { observer } from 'mobx-react-lite'

export const AddNote: React.FC = observer(() => {
    const { openNoteCreateMode } = useNotesStore()
    return (
        <div className='opacity-70'>
            <StyledButton
                startIcon={<IconNew width={24} height={24} />}
                onClick={() => openNoteCreateMode()}
                className=''
                variant='text'
            >
                Add note
            </StyledButton>
        </div>
    )
})
