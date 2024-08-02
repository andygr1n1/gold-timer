import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { XSkeleton } from '../x-skeleton/XSkeleton'
import styles from './XTiptap.module.scss'
import { BubbleMenuExt } from './extensions/bubble-menu/BubbleMenuExt'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'

export const XTiptap: React.FC<{
    onChange: (html: string) => void
    content: string
    isLoading?: boolean
    readonly?: boolean
}> = ({ content, onChange, isLoading = false, readonly = false }) => {
    const extensions = [
        Heading.configure({
            levels: [1, 2, 3],
        }),
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
        <div className={styles['xtiptap']}>
            <EditorProvider
                onUpdate={({ editor }) => {
                    const htmlContent = editor.getHTML()
                    onChange(htmlContent)
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
            />
        </div>
    )
}
