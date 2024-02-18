import { observer } from 'mobx-react-lite'
import { NotesTagsSelectDialog } from './NotesTagsSelectDialog'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNotesStore } from '@/StoreProvider'
import { IconFilterBolt } from '@/assets/icons'

export const NotesTagsSelectButton: React.FC = observer(() => {
    const { onChangeField } = useNotesStore()
    return (
        <>
            <StyledButton
                onClick={() => {
                    onChangeField('tags_list_view', true)
                }}
                variant='outlined'
                startIcon={<IconFilterBolt width={24} height={24} />}
            />
            <NotesTagsSelectDialog />
        </>
    )
})
