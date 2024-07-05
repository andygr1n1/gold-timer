import { cn } from '@/helpers/cn'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { toggleBlockType } from '../../utility/toggleBlockType'
import { IconOl } from '../../icons/IconOl'

export const ToggleOl: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ editorRef, editorState, setEditorState }) => {
    return (
        <button
            className='cursor-pointer hover:text-blue-500'
            onClick={() => toggleBlockType({ blockType: 'ordered-list-item', editorRef, editorState, setEditorState })}
        >
            <IconOl className={cn('cursor-pointer hover:text-blue-500 min-h-[20px] min-w-[20px]')} />
        </button>
    )
}
