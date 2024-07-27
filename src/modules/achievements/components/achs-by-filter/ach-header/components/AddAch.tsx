import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useAchEditor$ } from '../../../../components-shared/ach-editor-dialog/stores/useAchEditor.store'
import { editorModeEnum } from '@/services/types'

export const AddAch: React.FC = () => {
    const { setStore } = useAchEditor$()

    const add = () => {
        setStore({ editorMode: editorModeEnum.new, id: null, open: true })
    }

    return (
        <div className='opacity-70'>
            <StyledButton startIcon={<IconNew width={24} height={24} />} onClick={add} variant='text'>
                Add achievement
            </StyledButton>
        </div>
    )
}
