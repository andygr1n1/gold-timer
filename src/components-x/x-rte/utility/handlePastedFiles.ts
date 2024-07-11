import { AtomicBlockUtils, DraftHandleValue, EditorState } from 'draft-js'

const addImage = (props: {
    src: string
    editorState: EditorState
    handleEditorChange: (state: EditorState) => void
}) => {
    const { src, editorState, handleEditorChange } = props
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src })
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
        EditorState.set(editorState, { currentContent: contentStateWithEntity }),
        entityKey,
        ' ',
    )

    handleEditorChange(
        EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter()),
    )
}

export const handlePastedFiles = (props: {
    files: Array<Blob>
    editorState: EditorState
    handleEditorChange: (state: EditorState) => void
}): DraftHandleValue => {
    const { files, editorState, handleEditorChange } = props
    const file = files[0]
    if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
            if (e.target?.result) {
                addImage({ src: e.target.result as string, editorState, handleEditorChange })
            }
        }
        reader.readAsDataURL(file)
        return 'handled'
    }
    return 'not-handled'
}
