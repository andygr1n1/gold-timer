import { StyledButton } from '@/components/buttons/StyledButton'
import { useCurrentEditor } from '@tiptap/react'

export const SaveButton: React.FC<{ onSave?: (html: string) => void }> = ({ onSave }) => {
    const { editor } = useCurrentEditor()
    if (!editor) return null

    return (
        <StyledButton
            className='min-w-[80px]'
            size='small'
            onClick={() => {
                onSave?.(editor.getHTML())
                editor.commands.clearContent()
            }}
        >
            Save
        </StyledButton>
    )
}
