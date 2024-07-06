import { EditorState, Modifier } from 'draft-js'
import { Dispatch, SetStateAction } from 'react'
import { cn } from '@/helpers/cn'
import { IconEraser } from '@/assets/icons'

export const Eraser: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
}> = ({ setEditorState, editorState }) => {
    return (
        <button
            type='button'
            className='cursor-pointer hover:text-blue-500 '
            onClick={() => resetStyles(editorState, setEditorState)}
        >
            <IconEraser className={cn('cursor-pointer hover:text-blue-500 min-h-[20px] min-w-[20px]')} />
        </button>
    )
}

const resetStyles = (editorState: EditorState, setEditorState: React.Dispatch<React.SetStateAction<EditorState>>) => {
    const selection = editorState.getSelection()
    let contentState = editorState.getCurrentContent()

    // Remove all inline styles
    const stylesToRemove = editorState.getCurrentInlineStyle()
    stylesToRemove.forEach((style) => {
        contentState = Modifier.removeInlineStyle(contentState, selection, style || '')
    })

    // Set block type to unstyled
    const resetBlockState = Modifier.setBlockType(contentState, selection, 'unstyled')
    const newEditorState = EditorState.push(editorState, resetBlockState, 'change-block-type')

    setEditorState(EditorState.forceSelection(newEditorState, selection))
}
