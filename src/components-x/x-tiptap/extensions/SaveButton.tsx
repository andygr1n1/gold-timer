import { IconEnterButton } from '@/assets/icons/IconEnterButton'
import { IconShift } from '@/assets/icons/IconShift'
import { StyledButton } from '@/components/buttons/StyledButton'
import { extractTextFromHtml } from '@/helpers/extractTextFromHtml'
import { useCurrentEditor } from '@tiptap/react'

export const SaveButton: React.FC<{
    onSave?: (props: { html: string; clearEditor: () => void }) => void
    showSaveButtonTooltip?: boolean
}> = ({ onSave, showSaveButtonTooltip = true }) => {
    const { editor } = useCurrentEditor()

    const hasContent = editor && extractTextFromHtml(editor.getHTML())?.length
    if (!hasContent) return null

    return (
        <div className='relative'>
            {showSaveButtonTooltip && (
                <div className='absolute -left-14 top-[4px] opacity-30'>
                    <IconShift /> + <IconEnterButton />
                </div>
            )}
            <StyledButton
                className='min-w-[80px]'
                size='small'
                onClick={(e) => {
                    e.stopPropagation()
                    onSave?.({ html: editor.getHTML(), clearEditor: () => editor.commands.clearContent() })
                }}
            >
                Save
            </StyledButton>
        </div>
    )
}
