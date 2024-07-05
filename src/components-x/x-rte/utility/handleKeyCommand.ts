import { DraftHandleValue, EditorState, RichUtils } from "draft-js"

export const handleKeyCommand = (
    command: string,
    state: EditorState,
    handleEditorChange: (state: EditorState) => void,
): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(state, command)
    if (newState) {
        handleEditorChange(newState)
        return 'handled'
    }
    return 'not-handled'
}
