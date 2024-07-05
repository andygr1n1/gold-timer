import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { cn } from '@/helpers/cn'
import { blockTypes, toggleBlockType } from '../../utility/toggleBlockType'
import { IconTitle } from '../../icons/IconTitle'

export const BlockTypeMenu: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ setEditorState, editorState, editorRef }) => {
    return (
        <XDropdown
            overlayStyle={{ zIndex: 9999 }}
            trigger={['hover']}
            dropdownRender={() => (
                <XMenuDropdown>
                    {blockTypes.map((blockType) => (
                        <XMenuItem
                            className='!opacity-100 !text-cText'
                            key={blockType.type}
                            onClick={() =>
                                toggleBlockType({ blockType: blockType.type, editorRef, editorState, setEditorState })
                            }
                        >
                            {blockType.label}
                        </XMenuItem>
                    ))}
                </XMenuDropdown>
            )}
        >
            <IconTitle
                className={cn(
                    'cursor-pointer text-cText opacity-80 hover:opacity-100 mb-1 px-1 hover:text-blue-500 min-h-5 min-w-5',
                )}
            />
        </XDropdown>
    )
}
