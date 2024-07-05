import { DraftHandleValue, EditorState, Modifier } from 'draft-js'
import { SetStateAction } from 'jotai'
import { Dispatch } from 'react'

export const handleBeforeInput = (
    chars: string,
    editorState: EditorState,
    setEditorState: Dispatch<SetStateAction<EditorState>>,
): DraftHandleValue => {
    const currentContent = editorState.getCurrentContent()
    const selection = editorState.getSelection()
    const newContent = Modifier.insertText(currentContent, selection, chars)
    const newEditorState = EditorState.push(editorState, newContent, 'insert-characters')
    setEditorState(newEditorState)
    return 'handled'
}
