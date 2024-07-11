import React, { useRef } from 'react'
import { Editor, convertToRaw } from 'draft-js'

import { handlePastedFiles } from './utility/handlePastedFiles'
import { IEditorCore } from './types'
import { handleKeyCommand } from './utility/handleKeyCommand'
import { handleEditorChange } from './utility/handleEditorChange'
import { useEditorState } from './hooks/useEditorState'
import { handlePastedText } from './utility/handlePastedText'
import { ToolbarIndex } from './components/ToolbarIndex'
import { cn } from '@/helpers/cn'

export const EditorCore: React.FC<IEditorCore> = ({
    content,
    onChangeContent,
    toolbarExtend,
    showBaseToolbar = true,
    smallBaseToolbar = false,
    showToolbar = true,
    error = false,
    errorMessage = '',
    wrapperClassName = '',
    ...props
}) => {
    const editorRef = useRef<Editor>(null)
    const { editorState, setEditorState, customStyleMap, setCustomStyleMap } = useEditorState({
        content,
    })
    return (
        <div
            className={cn(
                'text-base flex flex-col rounded-md border-solid border-[1px] border-transparent p-3 w-[calc(100%-26px)]',
                wrapperClassName && wrapperClassName,
                !props.readOnly && `border-blue-900 focus-within:border-blue-600 hover:border-blue-600`,
                error && 'border-red-500 hover:border-red-500 focus:border-red-500 focus-within:border-red-500',
            )}
        >
            <div className={cn('flex flex-col h-full w-full flex-auto relative')}>
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
                        onChangeContent?.(JSON.stringify(convertToRaw(contentState)))
                    }}
                    handleKeyCommand={(command, state) =>
                        handleKeyCommand(command, state, () =>
                            handleEditorChange(state, setEditorState, onChangeContent),
                        )
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
                {error && errorMessage && (
                    <div
                        data-testid='error-message'
                        className='font-kzen bg-global-3-bg absolute bottom-[-17px] left-2 z-20 m-0 rounded-full p-0 px-1 text-xs leading-3 text-red-700 '
                    >
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    )
}
