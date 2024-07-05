import { Dispatch, useEffect } from 'react'
import { DraftDecoratorType, EditorState, convertFromRaw } from 'draft-js'
import { SetStateAction } from 'jotai'
import { stateFromHTML } from 'draft-js-import-html'

export const useInitEffect = (props: {
    content: string
    isLoading: boolean
    decorator: DraftDecoratorType
    setEditorState: Dispatch<SetStateAction<EditorState>>
}) => {
    const { isLoading, content, decorator, setEditorState } = props

    useEffect(() => {
        if (!isLoading && content) {
            let contentState
            try {
                const rawContentState = JSON.parse(content)
                contentState = convertFromRaw(rawContentState)
            } catch (error) {
                contentState = stateFromHTML(content)
            }
            setEditorState(EditorState.createWithContent(contentState, decorator))
        }
    }, [isLoading, content, decorator])
}
