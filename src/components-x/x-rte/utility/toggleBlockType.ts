import { Editor, EditorState, Modifier, RichUtils } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'

export const toggleBlockType = (props: {
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    blockType: string
    editorRef: RefObject<Editor>
}) => {
    const { editorState, setEditorState, blockType, editorRef } = props
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

        // Toggle the block type on the space
        newEditorState = RichUtils.toggleBlockType(newEditorState, blockType)

        // Remove the space after toggling the block type
        const contentStateWithoutSpace = Modifier.removeRange(
            newEditorState.getCurrentContent(),
            newEditorState.getSelection(),
            'backward',
        )

        newEditorState = EditorState.push(newEditorState, contentStateWithoutSpace, 'remove-range')

        // Force selection to the end after removing space
        const finalSelection = newEditorState.getSelection().merge({
            anchorOffset: newSelection.getAnchorOffset(),
            focusOffset: newSelection.getAnchorOffset(),
        })

        newEditorState = EditorState.forceSelection(newEditorState, finalSelection)
    } else {
        // Toggle the block type
        newEditorState = RichUtils.toggleBlockType(editorState, blockType)
    }

    setEditorState(newEditorState)

    // Ensure the editor refocuses after toggling the style
    if (editorRef.current) {
        setTimeout(() => {
            editorRef.current?.focus()
        }, 0)
    }
}
export const blockTypes = [
    { label: 'Header 1', type: 'header-one' },
    { label: 'Header 2', type: 'header-two' },
    { label: 'Header 3', type: 'header-three' },
]
