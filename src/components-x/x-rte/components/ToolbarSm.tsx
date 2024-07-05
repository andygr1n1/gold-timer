import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'

import { ColorMenu } from './components/color-menu/ColorMenu'
import { IColorStyleMap } from '../types'
import { BlockTypeMenu } from './components/BlockTypeMenu'
import { ToggleBold } from './components/ToggleBold'
import { ToggleItalic } from './components/ToggleItalic'
import { ToggleUnderline } from './components/ToggleUnderline'
import { ToggleStrikeThrough } from './components/ToggleStrikeThrough'
import { ToolbarSmMenu } from './components/ToolbarSmMenu'

export const ToolbarSm: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    toolbarExtend?: React.ReactNode
    editorRef: RefObject<Editor>
    colorStyleMap: IColorStyleMap
    setCustomStyleMap: Dispatch<SetStateAction<IColorStyleMap>>
    showToolbarExtend?: boolean
    showBaseToolbar?: boolean
}> = ({ editorState, editorRef, setEditorState, colorStyleMap, setCustomStyleMap }) => {
    return (
        <>
            <BlockTypeMenu editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleBold editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleItalic editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleUnderline editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleStrikeThrough editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />

            <ColorMenu
                editorRef={editorRef}
                editorState={editorState}
                setEditorState={setEditorState}
                colorStyleMap={colorStyleMap}
                setCustomStyleMap={setCustomStyleMap}
            />
            <ToolbarSmMenu editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
        </>
    )
}
