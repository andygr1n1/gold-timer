import { StyledButton } from '@/components/buttons/StyledButton'
import { useFetchNotesLabels } from '@/modules/notes/components/notes-cms/components/notes-header/components/note-label/notes-labels-dialog/service/useFetchNotesLabels'
import { INoteSchema } from '@/modules/notes/shared-services/types'
import { useFormikContext } from 'formik'
import { sortBy } from 'lodash-es'

export const SelectLabelsByRating: React.FC<{ handleSelect: (value: string) => void }> = ({ handleSelect }) => {
    const { notesLabels } = useFetchNotesLabels()
    const formikContext = useFormikContext<INoteSchema>()

    return (
        <div className='flex gap-2 mt-4 flex-wrap'>
            {sortBy(notesLabels, ['rating'])
                .reverse()
                .slice(0, 4)
                .map((nl) => (
                    <StyledButton
                        onClick={() => {
                            handleSelect(nl.id)
                        }}
                        size='small'
                        variant={nl.id === formikContext.values.label_id ? 'contained' : 'outlined'}
                        key={nl.name}
                        className='capitalize'
                    >
                        {nl.name}
                    </StyledButton> // Always include a unique key prop in React components generated in loops
                ))}
        </div>
    )
}
