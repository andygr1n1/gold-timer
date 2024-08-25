import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { PropsWithChildren, ReactNode, useEffect } from 'react'
import { XSkeleton } from '../x-skeleton/XSkeleton'
import styles from './XTiptap.module.scss'
import { BubbleMenuExt } from './extensions/bubble-menu/BubbleMenuExt'
import Underline from '@tiptap/extension-underline'
import { cn } from '@/helpers/cn'

type ITiptap = {
    onChange?: (html: string) => void
    content: string
    isLoading?: boolean
    readonly?: boolean
    children?: ReactNode
    error?: boolean
    errorMessage?: ReactNode
}

export const XTiptap: React.FC<ITiptap> = (props) => {
    const { content, onChange, isLoading = false, readonly = false, children, error, errorMessage } = props

    const extensions = [
        // Heading.configure({
        //     levels: [1, 2, 3],
        // }),
        Underline,
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle,
        StarterKit.configure({
            bulletList: {
                keepMarks: true,
                keepAttributes: false,
            },
            orderedList: {
                keepMarks: true,
                keepAttributes: false,
            },
        }),
    ]

    if (isLoading) return <XSkeleton length={1} />

    return (
        <div
            className={cn(styles['xtiptap'], readonly && styles['xtiptap-readonly'], error && styles['xtiptap-error'])}
        >
            <EditorProvider
                onUpdate={({ editor }) => {
                    const htmlContent = editor.getHTML()
                    onChange?.(htmlContent)
                }}
                slotBefore={
                    <div className={styles['menu']}>
                        <BubbleMenuExt />
                    </div>
                }
                editable={!readonly}
                extensions={extensions}
                content={content}
                editorProps={{ attributes: { class: 'rounded-md bg-transparent h-full' } }}
            >
                <EditorChildrenWrapper {...props}> {children}</EditorChildrenWrapper>
            </EditorProvider>
            {error && errorMessage && (
                <div
                    data-testid='error-message'
                    className='font-kzen bg-global-3-bg absolute bottom-[3px] left-2 z-20 m-0 rounded-full p-0 px-1 text-xs leading-3 text-red-700 '
                >
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

const EditorChildrenWrapper: React.FC<ITiptap & PropsWithChildren> = (props) => {
    const { editor } = useCurrentEditor()

    useEffect(() => {
        if (editor) {
            editor.setEditable(!props.readonly)
        }
    }, [props.readonly, editor])

    return props.children
}
