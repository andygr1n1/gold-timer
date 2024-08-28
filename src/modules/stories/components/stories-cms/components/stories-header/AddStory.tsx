import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useStoryEditorDialog$ } from '../../../story-editor-dialog/mst/provider'

export const AddStory: React.FC = () => {
    const { onChangeField } = useStoryEditorDialog$()

    return (
        <div className='opacity-70'>
            <StyledButton
                startIcon={<IconNew width={24} height={24} />}
                onClick={() => onChangeField('open', true)}
                variant='text'
            >
                Add story
            </StyledButton>
        </div>
    )
}
