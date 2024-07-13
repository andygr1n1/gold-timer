import { CompositeDecorator, EditorState, convertFromRaw } from 'draft-js'
import { useEffect, useState } from 'react'
import { colorStyleMap } from '../components/components/color-menu/colorsStyleMap'
import { stateFromHTML } from 'draft-js-import-html'
import { Image, findImageEntities } from '../utility/decorator'

const isEditorStateEmpty = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent()
    const blocks = contentState.getBlocksAsArray()
    return blocks.every((block) => !block.getText().trim())
}

export const useEditorState = (props: { content?: string }) => {
    const { content } = props

    // Decorator for rendering image entities
    const decorator = new CompositeDecorator([
        {
            strategy: findImageEntities,
            component: Image,
        },
    ])

    const [customStyleMap, setCustomStyleMap] = useState(colorStyleMap)

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

    useEffect(() => {
        if (!!content && !!isEditorStateEmpty(editorState)) {
            let contentState
            try {
                const rawContentState = JSON.parse(content)
                contentState = convertFromRaw(rawContentState)
            } catch (error) {
                contentState = stateFromHTML(content)
            }
            setEditorState(EditorState.createWithContent(contentState, decorator))
        }
    }, [content])

    return { editorState, setEditorState, customStyleMap, setCustomStyleMap }
}
