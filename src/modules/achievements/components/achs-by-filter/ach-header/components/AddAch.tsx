import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useAchEditorDialog$ } from '../../../ach-editor-dialog/mst/provider'

export const AddAch: React.FC = () => {
    const { onChangeField } = useAchEditorDialog$()

    const add = () => {
        onChangeField('open', true)
    }

    return (
        <div className='opacity-70'>
            <StyledButton startIcon={<IconNew width={24} height={24} />} onClick={add} variant='text'>
                Add achievement
            </StyledButton>
        </div>
    )
}
