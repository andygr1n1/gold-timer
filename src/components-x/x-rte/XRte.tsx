import React, { useEffect, useRef, useState } from 'react'
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    convertFromRaw,
    EditorProps,
    AtomicBlockUtils,
    CompositeDecorator,
    ContentBlock,
    ContentState,
    DraftHandleValue,
    Modifier,
} from 'draft-js'
import 'draft-js/dist/Draft.css'
import { BoldIcon } from './icons/BoldIcon'
import { cn } from '@/helpers/cn'
import { UnderlineIcon } from './icons/UnderlineIcon'
import { StrikeThroughIcon } from './icons/StrikeThroughIcon'
import { ItalicIcon } from './icons/ItalicIcon'

// Image component for rendering
const Image = (props: any) => {
    const { src } = props.contentState.getEntity(props.entityKey).getData()
    return <img src={src} alt='' style={{ maxWidth: '100%' }} />
}

const isBoldActive = (editorState: EditorState) => {
    const currentStyle = editorState.getCurrentInlineStyle()
    return currentStyle.has('BOLD')
}

// Strategy for finding image entities in the content
const findImageEntities = (contentBlock: ContentBlock, callback: any, contentState: ContentState) => {
    contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity()
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMAGE'
    }, callback)
}

// Decorator for rendering image entities
const decorator = new CompositeDecorator([
    {
        strategy: findImageEntities,
        component: Image,
    },
])

export const XRte: React.FC<
    Partial<EditorProps> & {
        isLoading?: boolean
        onChangeContent: (data: string) => void
        content: string
        toolbarExtend?: React.ReactNode
    }
> = ({ content, onChangeContent, isLoading = false, toolbarExtend, ...props }) => {
    const [editorState, setEditorState] = useState(() =>
        content
            ? EditorState.createWithContent(convertFromRaw(JSON.parse(content)), decorator)
            : EditorState.createEmpty(decorator),
    )

    const editorRef = useRef<Editor>(null)

    useEffect(() => {
        if (!isLoading && content) {
            setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(content)), decorator))
        }
    }, [isLoading])

    const handleEditorChange = (state: EditorState) => {
        setEditorState(state)
        const contentState = state.getCurrentContent()
        onChangeContent(JSON.stringify(convertToRaw(contentState)))
    }

    const handleKeyCommand = (command: string, state: EditorState): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(state, command)
        if (newState) {
            handleEditorChange(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    const toggleInlineStyle = (style: string) => {
        let newEditorState = editorState
        const selection = editorState.getSelection()

        // Check if the selection is collapsed (i.e., there is no text selected)
        if (selection.isCollapsed()) {
            // Insert a space
            const contentStateWithSpace = Modifier.insertText(
                editorState.getCurrentContent(),
                selection,
                ' ',
                editorState.getCurrentInlineStyle(),
            )

            // Create a new editor state with the inserted space
            newEditorState = EditorState.push(editorState, contentStateWithSpace, 'insert-characters')

            // Move the selection to include the space
            const newSelection = selection.merge({
                anchorOffset: selection.getAnchorOffset(),
                focusOffset: selection.getAnchorOffset() + 1,
            })

            newEditorState = EditorState.forceSelection(newEditorState, newSelection)

            // Toggle the inline style on the space
            newEditorState = RichUtils.toggleInlineStyle(newEditorState, style)

            // Force selection to the end after applying style
            const finalSelection = newSelection.merge({
                anchorOffset: newSelection.getAnchorOffset() + 0,
                focusOffset: newSelection.getAnchorOffset() + 1,
            })

            newEditorState = EditorState.forceSelection(newEditorState, finalSelection)
        } else {
            newEditorState = RichUtils.toggleInlineStyle(newEditorState, style)
        }

        setEditorState(newEditorState)

        // Ensure the editor refocuses after toggling the style
        if (editorRef.current) {
            setTimeout(() => {
                editorRef.current?.focus()
            }, 0)
        }
    }
    const addImage = (src: string) => {
        const contentState = editorState.getCurrentContent()
        const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src })
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

        console.log('entityKey', entityKey)
        console.log('contentStateWithEntity', convertToRaw(contentStateWithEntity))

        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
            EditorState.set(editorState, { currentContent: contentStateWithEntity }),
            entityKey,
            ' ',
        )

        console.log('newEditorState.getCurrentContent()', convertToRaw(newEditorState.getCurrentContent()))

        handleEditorChange(
            EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter()),
        )
    }

    const handlePastedFiles = (files: Array<Blob>): DraftHandleValue => {
        const file = files[0]
        if (file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                if (e.target?.result) {
                    addImage(e.target.result as string)
                }
            }
            reader.readAsDataURL(file)
            return 'handled'
        }
        return 'not-handled'
    }

    useEffect(() => {
        console.log('Editor state updated', convertToRaw(editorState.getCurrentContent()))
    }, [editorState])

    return (
        <div className='w-full flex flex-col p-5'>
            <div className='toolbar flex h-10 border-b-solid border-slate-600/50'>
                <div className='flex flex-auto'>
                    <button className='cursor-pointer hover:text-blue-500' onClick={() => toggleInlineStyle('BOLD')}>
                        <BoldIcon
                            className={cn(
                                'cursor-pointer hover:text-blue-500 h-4 w-4',
                                isBoldActive(editorState) && 'text-blue-500',
                            )}
                        />
                    </button>
                    <button className='cursor-pointer hover:text-blue-500' onClick={() => toggleInlineStyle('ITALIC')}>
                        <ItalicIcon
                            className={cn(
                                'cursor-pointer hover:text-blue-500 mt-[2px] h-5 w-5',
                                isBoldActive(editorState) && 'text-blue-500',
                            )}
                        />
                    </button>
                    <button
                        className='cursor-pointer hover:text-blue-500'
                        onClick={() => toggleInlineStyle('UNDERLINE')}
                    >
                        <UnderlineIcon
                            className={cn(
                                'cursor-pointer hover:text-blue-500 mt-[2px] h-5 w-5',
                                isBoldActive(editorState) && 'text-blue-500',
                            )}
                        />
                    </button>
                    <button
                        className='cursor-pointer hover:text-blue-500'
                        onClick={() => toggleInlineStyle('STRIKETHROUGH')}
                    >
                        <StrikeThroughIcon
                            className={cn(
                                'cursor-pointer hover:text-blue-500 h-5 w-5',
                                isBoldActive(editorState) && 'text-blue-500',
                            )}
                        />
                    </button>
                </div>
                {/* Add more buttons for other styles and functionalities as needed */}
                <div className='flex min-w-fit'>{toolbarExtend}</div>
            </div>
            <Editor
                {...props}
                editorState={editorState}
                onChange={handleEditorChange}
                handleKeyCommand={handleKeyCommand}
                handlePastedFiles={handlePastedFiles}
                ref={editorRef}
            />
        </div>
    )
}
