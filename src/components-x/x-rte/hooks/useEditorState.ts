import { DraftDecoratorType, EditorState, convertFromRaw } from 'draft-js'
import { useState } from 'react'
import { colorStyleMap } from '../components/components/color-menu/colorsStyleMap'
import { stateFromHTML } from 'draft-js-import-html'

export const useEditorState = (props: { content: string; decorator: DraftDecoratorType }) => {
    const { content, decorator } = props

    const [editorState, setEditorState] = useState(() => {
        if (content) {
            try {
                // Attempt to parse initialContent as JSON (Draft.js raw state)
                const rawContentState = JSON.parse(content)
                const contentState = convertFromRaw(rawContentState)
                return EditorState.createWithContent(contentState, decorator)
            } catch (error) {
                // If parsing fails, assume initialContent is HTML
                const contentState = stateFromHTML(content)
                return EditorState.createWithContent(contentState, decorator)
            }
        } else {
            return EditorState.createEmpty(decorator)
        }
    })
    const [customStyleMap, setCustomStyleMap] = useState(colorStyleMap)

    return { editorState, setEditorState, customStyleMap, setCustomStyleMap }
}
