import React, { useRef } from 'react'
import { Editor } from 'draft-js'

import { handlePastedFiles } from './utility/handlePastedFiles'
import { decorator } from './utility/decorator'
import { IXrte } from './types'
import { useInitEffect } from './hooks/useUnitEffect'
import { handleKeyCommand } from './utility/handleKeyCommand'
import { handleEditorChange } from './utility/handleEditorChange'
import { useEditorState } from './hooks/useEditorState'
import { handleBeforeInput } from './utility/handleBeforeInput'
import { handlePastedText } from './utility/handlePastedText'
import { ToolbarIndex } from './components/ToolbarIndex'

export const XRte: React.FC<IXrte> = ({
    content,
    onChangeContent,
    isLoading = false,
    toolbarExtend,
    showBaseToolbar = true,
    showToolbarExtend = true,
    showToolbar = true,
    ...props
}) => {
    const editorRef = useRef<Editor>(null)

    const { editorState, setEditorState, customStyleMap, setCustomStyleMap } = useEditorState({ content, decorator })

    useInitEffect({ setEditorState, isLoading, content, decorator })

    return (
        <div className='w-full flex flex-col p-5'>
            {showToolbar && (
                <ToolbarIndex
                    editorState={editorState}
                    setEditorState={setEditorState}
                    editorRef={editorRef}
                    toolbarExtend={toolbarExtend}
                    showBaseToolbar={showBaseToolbar}
                    showToolbarExtend={showToolbarExtend}
                    colorStyleMap={customStyleMap}
                    setCustomStyleMap={setCustomStyleMap}
                />
            )}
            <Editor
                editorState={editorState}
                onChange={(state) => handleEditorChange(state, setEditorState, onChangeContent)}
                handleKeyCommand={(command, state) =>
                    handleKeyCommand(command, state, () => handleEditorChange(state, setEditorState, onChangeContent))
                }
                handlePastedFiles={(files) =>
                    handlePastedFiles({
                        files,
                        editorState,
                        handleEditorChange: (state) => handleEditorChange(state, setEditorState, onChangeContent),
                    })
                }
                handleBeforeInput={(chars, editorState) => handleBeforeInput(chars, editorState, setEditorState)}
                handlePastedText={(text, html, editorState) =>
                    handlePastedText(text, html, editorState, setEditorState)
                }
                customStyleMap={customStyleMap}
                ref={editorRef}
                {...props}
            />
        </div>
    )
}
