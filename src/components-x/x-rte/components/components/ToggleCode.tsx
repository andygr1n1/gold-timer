import { cn } from '@/helpers/cn'
import { toggleInlineStyle } from '../../utility/toggleInlineStyle'
import { isToolBarItemActive, toolbarItems } from '../../utility/toolbarUtility'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { IconPencilCode } from '../../icons/IconPencilCode'

export const ToggleCode: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ editorRef, editorState, setEditorState }) => {
    return (
        <button
            className='cursor-pointer hover:text-blue-500'
            onClick={() =>
                toggleInlineStyle({
                    style: toolbarItems.CODE,
                    editorState,
                    editorRef,
                    setEditorState,
                })
            }
        >
            <IconPencilCode
                className={cn(
                    'cursor-pointer hover:text-blue-500 h-5 w-5',
                    isToolBarItemActive(editorState, toolbarItems.CODE) && 'text-blue-500',
                )}
            />
        </button>
    )
}
