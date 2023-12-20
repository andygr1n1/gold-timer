import { observer } from 'mobx-react-lite'
import { NotesTagsSelectDialog } from './NotesTagsSelectDialog'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { useNotesStore } from '@/StoreProvider'

export const NotesTagsSelectButton: React.FC = observer(() => {
    const { onChangeField } = useNotesStore()
    return (
        <>
            <StyledButton
                onClick={() => {
                    onChangeField('tags_list_view', true)
                }}
                variant='outlined'
                startIcon={<Icon icon='tabler:filter-bolt' width={24} height={24} />}
            />
            <NotesTagsSelectDialog />
        </>
    )
})
