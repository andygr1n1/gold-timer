import React, { useRef } from 'react'
import { Editor, convertToRaw } from 'draft-js'

import { handlePastedFiles } from './utility/handlePastedFiles'
import { IEditorCore } from './types'
import { handleKeyCommand } from './utility/handleKeyCommand'
import { handleEditorChange } from './utility/handleEditorChange'
import { useEditorState } from './hooks/useEditorState'
import { handlePastedText } from './utility/handlePastedText'
import { ToolbarIndex } from './components/ToolbarIndex'

export const EditorCore: React.FC<IEditorCore> = ({
    content,
    onChangeContent,
    toolbarExtend,
    showBaseToolbar = true,
    smallBaseToolbar = false,
    showToolbar = true,
    ...props
}) => {
    const editorRef = useRef<Editor>(null)
    const { editorState, setEditorState, customStyleMap, setCustomStyleMap } = useEditorState({
        content,
    })
    return (
        <div className='w-full flex flex-col'>
            {showToolbar && (
                <ToolbarIndex
                    editorState={editorState}
                    setEditorState={setEditorState}
                    editorRef={editorRef}
                    toolbarExtend={toolbarExtend}
                    showBaseToolbar={showBaseToolbar}
                    smallBaseToolbar={smallBaseToolbar}
                    colorStyleMap={customStyleMap}
                    setCustomStyleMap={setCustomStyleMap}
                />
            )}
            <Editor
                editorState={editorState}
                onChange={(state) => {
                    setEditorState(state)
                    const contentState = state.getCurrentContent()
                    onChangeContent(JSON.stringify(convertToRaw(contentState)))
                }}
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
                // handleBeforeInput={(chars, editorState) => handleBeforeInput(chars, editorState, setEditorState)}
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
