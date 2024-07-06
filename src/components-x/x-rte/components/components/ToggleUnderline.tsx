import { cn } from '@/helpers/cn'
import { toggleInlineStyle } from '../../utility/toggleInlineStyle'
import { isToolBarItemActive, toolbarItems } from '../../utility/toolbarUtility'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { IconUnderline } from '../../icons/IconUnderline'

export const ToggleUnderline: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ editorRef, editorState, setEditorState }) => {
    return (
        <button
            type='button'
            className='cursor-pointer hover:text-blue-500'
            onClick={() => toggleInlineStyle({ style: toolbarItems.UNDERLINE, editorState, editorRef, setEditorState })}
        >
            <IconUnderline
                className={cn(
                    'cursor-pointer hover:text-blue-500 mt-[2px] h-5 w-5',
                    isToolBarItemActive(editorState, toolbarItems.UNDERLINE) && 'text-blue-500',
                )}
            />
        </button>
    )
}
