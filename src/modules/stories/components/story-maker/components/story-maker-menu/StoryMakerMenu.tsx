import { IconThreeDots } from '@/assets/icons/IconThreeDots'
import { StyledButton } from '@/components/buttons/StyledButton'
import { storyEditorDialog$, StoryEditorDialog$Provider } from '../../../story-editor-dialog/mst/provider'
import { Suspense } from 'react'
import StoryEditorDialog from '../../../story-editor-dialog/StoryEditorDialog'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { StoryMakerContextMenu } from './StoryMakerContextMenu'

export const StoryMakerMenu: React.FC = () => {
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <StoryEditorDialog$Provider store={storyEditorDialog$}>
            <Suspense fallback={null}>
                <StoryEditorDialog />
            </Suspense>
            <XDropdown
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                trigger={['click', 'contextMenu']}
                dropdownRender={() => <StoryMakerContextMenu action={() => setPopoverState(false)} />}
            >
                {/* div is important for context menu positioning */}
                <div>
                    <StyledButton variant='text'>
                        <IconThreeDots className='w-5 h-5' />
                    </StyledButton>
                </div>
            </XDropdown>
        </StoryEditorDialog$Provider>
    )
}
