import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'

import { IColorStyleMap } from '../types'
import { Toolbar } from './Toolbar'

export const ToolbarIndex: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    toolbarExtend?: React.ReactNode
    editorRef: RefObject<Editor>
    colorStyleMap: IColorStyleMap
    setCustomStyleMap: Dispatch<SetStateAction<IColorStyleMap>>
    smallBaseToolbar?: boolean
    showBaseToolbar?: boolean
}> = (props) => {
    return (
        <div className='flex items-start w-full h-fit  border-b-solid border-slate-600/50'>
            <div className='flex flex-auto flex-wrap items-center  pb-2'>
                {props.showBaseToolbar && <Toolbar {...props} />}
            </div>
            {props.toolbarExtend && <div className='flex min-w-fit items-top justify-end'>{props.toolbarExtend}</div>}
        </div>
    )
}
