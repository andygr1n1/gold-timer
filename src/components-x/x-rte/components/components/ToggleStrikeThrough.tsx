import { cn } from '@/helpers/cn'
import { toggleInlineStyle } from '../../utility/toggleInlineStyle'
import { isToolBarItemActive, toolbarItems } from '../../utility/toolbarUtility'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { IconStrikeThrough } from '../../icons/IconStrikeThrough'

export const ToggleStrikeThrough: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ editorRef, editorState, setEditorState }) => {
    return (
        <button
            type='button'
            className='cursor-pointer hover:text-blue-500'
            onClick={() =>
                toggleInlineStyle({ style: toolbarItems.STRIKETHROUGH, editorState, editorRef, setEditorState })
            }
        >
            <IconStrikeThrough
                className={cn(
                    'cursor-pointer hover:text-blue-500 min-h-[20px] min-w-[20px]',
                    isToolBarItemActive(editorState, toolbarItems.STRIKETHROUGH) && 'text-blue-500',
                )}
            />
        </button>
    )
}
