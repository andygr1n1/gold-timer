import { EditorState, convertToRaw } from "draft-js"
import { Dispatch, SetStateAction } from "react"

export const handleEditorChange = (
    state: EditorState,
    setEditorState: Dispatch<SetStateAction<EditorState>>,
    onChangeContent: (data: string) => void,
) => {
    setEditorState(state)
    const contentState = state.getCurrentContent()
    onChangeContent(JSON.stringify(convertToRaw(contentState)))
}
