import { Editor, EditorState, Modifier, RichUtils } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { IColorStyleMap } from '../types'

export const applyColor = (editorState: EditorState, color: string, colorStyleMap: IColorStyleMap) => {
    const selection = editorState.getSelection()

    // Remove all current color styles
    const nextContentState = Object.keys(colorStyleMap).reduce((contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color)
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(editorState, nextContentState, 'change-inline-style')

    // Apply the color style
    nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, color)

    return nextEditorState
}

export const handleColor = (props: {
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    color: string
    editorRef: RefObject<Editor>
    colorStyleMap: IColorStyleMap
}) => {
    const { color, editorRef, editorState, setEditorState, colorStyleMap } = props

    const newEditorState = applyColor(editorState, color, colorStyleMap)
    setEditorState(newEditorState)

    // Ensure the editor refocuses after toggling the style
    if (editorRef.current) {
        setTimeout(() => {
            editorRef.current?.focus()
        }, 0)
    }
}

// export const handleColorChange = (props: {
//     editorState: EditorState
//     setEditorState: Dispatch<SetStateAction<EditorState>>
//     setCurrentColor: Dispatch<SetStateAction<string>>
//     color: { hex: string }
//     editorRef: RefObject<Editor>
//     colorStyleMap: IColorStyleMap
//     setCustomStyleMap: Dispatch<SetStateAction<IColorStyleMap>>
// }) => {
//     const { color, setCurrentColor, editorState, setEditorState, colorStyleMap, setCustomStyleMap, editorRef } = props
//     setCurrentColor(color.hex.toUpperCase())

//     const newStyleMap = {
//         ...colorStyleMap,
//         CUSTOM: { color: color.hex },
//     }
//     setCustomStyleMap(newStyleMap)

//     // Apply the custom color style
//     let newEditorState = applyColorHex(editorState, 'CUSTOM', colorStyleMap)

//     // Ensure the editor refocuses after toggling the style
//     if (editorRef.current) {
//         newEditorState = EditorState.forceSelection(newEditorState, newEditorState.getSelection())
//         setTimeout(() => {
//             editorRef.current?.focus()
//         }, 0)
//     }

//     setEditorState(newEditorState)
// }

// const applyColorHex = (editorState: EditorState, color: string, colorStyleMap: IColorStyleMap): EditorState => {
//     const selection = editorState.getSelection()

//     // Remove all current color styles
//     const nextContentState = Object.keys(colorStyleMap).reduce((contentState, colorKey) => {
//         return Modifier.removeInlineStyle(contentState, selection, colorKey)
//     }, editorState.getCurrentContent())

//     let nextEditorState = EditorState.push(editorState, nextContentState, 'change-inline-style')

//     // Apply the color style
//     nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, color)

//     return nextEditorState
// }
