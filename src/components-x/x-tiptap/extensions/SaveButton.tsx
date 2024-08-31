import { IconEnterButton } from '@/assets/icons/IconEnterButton'
import { IconShift } from '@/assets/icons/IconShift'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useCurrentEditor } from '@tiptap/react'

export const SaveButton: React.FC<{ onSave?: (props: { html: string; clearEditor: () => void }) => void }> = ({
    onSave,
}) => {
    const { editor } = useCurrentEditor()
    if (!editor) return null

    return (
        <div className='relative'>
            <div className='absolute -left-14 top-2 opacity-30'>
                <IconShift /> + <IconEnterButton />
            </div>
            <StyledButton
                className='min-w-[80px]'
                size='small'
                onClick={() => {
                    onSave?.({ html: editor.getHTML(), clearEditor: () => editor.commands.clearContent() })
                }}
            >
                Save
            </StyledButton>
        </div>
    )
}
