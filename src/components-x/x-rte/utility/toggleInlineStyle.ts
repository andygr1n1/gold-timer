import { Editor, EditorState, Modifier, RichUtils } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'

export const toggleInlineStyle = (props: {
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    style: string
    editorRef: RefObject<Editor>
}) => {
    const { editorState, setEditorState, style, editorRef } = props
    let newEditorState = editorState
    const selection = editorState.getSelection()
    // Check if the selection is collapsed (i.e., there is no text selected)
    if (selection.isCollapsed()) {
        // Insert a space
        const contentStateWithSpace = Modifier.insertText(
            editorState.getCurrentContent(),
            selection,
            ' ',
            editorState.getCurrentInlineStyle(),
        )

        // Create a new editor state with the inserted space
        newEditorState = EditorState.push(editorState, contentStateWithSpace, 'insert-characters')

        // Move the selection to include the space
        const newSelection = selection.merge({
            anchorOffset: selection.getAnchorOffset(),
            focusOffset: selection.getAnchorOffset() + 1,
        })

        newEditorState = EditorState.forceSelection(newEditorState, newSelection)

        // Toggle the inline style on the space
        newEditorState = RichUtils.toggleInlineStyle(newEditorState, style)

        // Force selection to the end after applying style
        const finalSelection = newSelection.merge({
            anchorOffset: newSelection.getAnchorOffset() + 0,
            focusOffset: newSelection.getAnchorOffset() + 1,
        })

        newEditorState = EditorState.forceSelection(newEditorState, finalSelection)
    } else {
        // Save the current selection state
        const currentSelection = newEditorState.getSelection()

        // Apply the inline style
        newEditorState = RichUtils.toggleInlineStyle(newEditorState, style)

        // Restore the selection state
        newEditorState = EditorState.forceSelection(newEditorState, currentSelection)
    }

    setEditorState(newEditorState)

    // Ensure the editor refocuses after toggling the style
    if (editorRef.current) {
        setTimeout(() => {
            editorRef.current?.focus()
        }, 0)
    }
}
