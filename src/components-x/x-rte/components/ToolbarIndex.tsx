import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'

import { IColorStyleMap } from '../types'
import { Toolbar } from './Toolbar'
import { ToolbarSm } from './ToolbarSm'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { Eraser } from './components/Eraser'

export const ToolbarIndex: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    toolbarExtend?: React.ReactNode
    editorRef: RefObject<Editor>
    colorStyleMap: IColorStyleMap
    setCustomStyleMap: Dispatch<SetStateAction<IColorStyleMap>>
    showToolbarExtend?: boolean
    showBaseToolbar?: boolean
}> = (props) => {
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    // return isMobile ? <ToolbarSm {...props} /> : <Toolbar {...props} />
    return (
        <div className='toolbar flex h-10 border-b-solid border-slate-600/50'>
            {props.showBaseToolbar && (
                <div className='flex flex-auto items-center'>
                    {isMobile ? <ToolbarSm {...props} /> : <Toolbar {...props} />}
                    <Eraser editorState={props.editorState} setEditorState={props.setEditorState} />
                </div>
            )}
            {props.showToolbarExtend && (
                <div className='flex min-w-fit items-center justify-end w-full'>{props.toolbarExtend}</div>
            )}
        </div>
    )
}
