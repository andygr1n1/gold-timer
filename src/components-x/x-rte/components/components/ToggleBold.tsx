import { cn } from '@/helpers/cn'
import { IconBold } from '../../icons/IconBold'
import { toggleInlineStyle } from '../../utility/toggleInlineStyle'
import { isToolBarItemActive, toolbarItems } from '../../utility/toolbarUtility'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'

export const ToggleBold: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ editorRef, editorState, setEditorState }) => {
    return (
        <button
            type='button'
            className='cursor-pointer hover:text-blue-500'
            onClick={() => toggleInlineStyle({ style: toolbarItems.BOLD, editorState, editorRef, setEditorState })}
        >
            <IconBold
                className={cn(
                    'cursor-pointer hover:text-blue-500 min-h-[18px] min-w-[18px]',
                    isToolBarItemActive(editorState, toolbarItems.BOLD) && 'text-blue-500',
                )}
            />
        </button>
    )
}
