import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { Editor, EditorState } from 'draft-js'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { cn } from '@/helpers/cn'
import { IconMore } from '../../icons/IconMore'
import { ToggleCode } from './ToggleCode'
import { ToggleOl } from './ToggleOl'
import { ToggleUl } from './ToggleUl'
import { ToggleBlockQuote } from './ToggleBlockQuote'
import { ToggleBlockCode } from './ToggleBlockCode'

export const ToolbarSmMenu: React.FC<{
    editorState: EditorState
    setEditorState: Dispatch<SetStateAction<EditorState>>
    editorRef: RefObject<Editor>
}> = ({ setEditorState, editorState, editorRef }) => {
    return (
        <XDropdown
            placement='bottomCenter'
            overlayStyle={{ zIndex: 9999 }}
            trigger={['hover']}
            dropdownRender={() => (
                <XMenuDropdown>
                    <XMenuItem>
                        <ToggleCode editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
                    </XMenuItem>
                    <XMenuItem>
                        <ToggleOl editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
                    </XMenuItem>
                    <XMenuItem>
                        <ToggleUl editorRef={editorRef} editorState={editorState} setEditorState={setEditorState} />
                    </XMenuItem>
                    <XMenuItem>
                        <ToggleBlockQuote
                            editorRef={editorRef}
                            editorState={editorState}
                            setEditorState={setEditorState}
                        />
                    </XMenuItem>
                    <XMenuItem>
                        <ToggleBlockCode
                            editorRef={editorRef}
                            editorState={editorState}
                            setEditorState={setEditorState}
                        />
                    </XMenuItem>
                </XMenuDropdown>
            )}
        >
            <IconMore
                className={cn(
                    'cursor-pointer text-cText opacity-80 hover:opacity-100 mb-1 px-1 hover:text-blue-500 min-h-5 min-w-5',
                )}
            />
        </XDropdown>
    )
}
