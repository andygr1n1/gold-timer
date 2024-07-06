import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'

import { ColorMenu } from './components/color-menu/ColorMenu'
import { IColorStyleMap } from '../types'
import { BlockTypeMenu } from './components/BlockTypeMenu'
import { ToggleBold } from './components/ToggleBold'
import { ToggleItalic } from './components/ToggleItalic'
import { ToggleUnderline } from './components/ToggleUnderline'
import { ToggleStrikeThrough } from './components/ToggleStrikeThrough'
import { ToggleCode } from './components/ToggleCode'
import { ToggleOl } from './components/ToggleOl'
import { ToggleUl } from './components/ToggleUl'
import { ToggleBlockQuote } from './components/ToggleBlockQuote'
import { ToggleBlockCode } from './components/ToggleBlockCode'
import { Eraser } from './components/Eraser'

export const Toolbar: React.FC<{
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
            <ToggleCode editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleOl editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleUl editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleBlockQuote editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ToggleBlockCode editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
            <ColorMenu
                editorRef={editorRef}
                editorState={editorState}
                setEditorState={setEditorState}
                colorStyleMap={colorStyleMap}
                setCustomStyleMap={setCustomStyleMap}
            />
            <Eraser editorState={editorState} setEditorState={setEditorState} />
        </>
    )
}
