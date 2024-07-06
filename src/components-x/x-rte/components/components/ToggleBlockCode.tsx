import { cn } from '@/helpers/cn'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { toggleBlockType } from '../../utility/toggleBlockType'
import { IconCode } from '../../icons/IconCode'

export const ToggleBlockCode: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ editorRef, editorState, setEditorState }) => {
    return (
        <button
            type='button'
            className='cursor-pointer hover:text-blue-500'
            onClick={() => toggleBlockType({ blockType: 'code-block', editorRef, editorState, setEditorState })}
        >
            <IconCode className={cn('cursor-pointer hover:text-blue-500 min-h-[20px] min-w-[20px]')} />
        </button>
    )
}
