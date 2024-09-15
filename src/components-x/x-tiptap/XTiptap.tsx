import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Image from '@tiptap/extension-image'
import FileHandler from '@tiptap-pro/extension-file-handler'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { type PropsWithChildren, type ReactNode, useEffect } from 'react'
import { XSkeleton } from '../x-skeleton/XSkeleton'
import styles from './XTiptap.module.scss'
import { BubbleMenuExt } from './extensions/bubble-menu/BubbleMenuExt'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import { cn } from '@/helpers/cn'
import { SaveButton } from './extensions/SaveButton'
import { ShiftEnterExtension } from './extensions/shift-enter-extension/ShiftEnterExtension'
type ITiptap = {
    onChange?: (html: string) => void
    content: string
    isLoading?: boolean
    readonly?: boolean
    children?: ReactNode
    error?: boolean
    errorMessage?: ReactNode
    onSave?: (props: { html: string; clearEditor: () => void }) => void
    customToolbar?: boolean
    showSaveButtonTooltip?: boolean
}

export const XTiptap: React.FC<ITiptap> = (props) => {
    const {
        content,
        onChange,
        isLoading = false,
        readonly = false,
        children,
        error,
        errorMessage,
        onSave,
        customToolbar,
        showSaveButtonTooltip,
    } = props

    const extensions = [
        StarterKit.configure({
            bulletList: {
                keepMarks: true,
                keepAttributes: false,
                HTMLAttributes: {
                    class: '!ml-[36px] !list-disc [&_li]:list-disc [&_li]-pl-[6px] ',
                },
            },
            orderedList: {
                keepMarks: true,
                keepAttributes: false,

                HTMLAttributes: {
                    class: ' list-decimal [&_li]:list-decimal',
                },
            },
        }),
        // Heading.configure({
        //     levels: [1, 2, 3],
        // }),
        Image.configure({ allowBase64: true, inline: true }),
        Underline,
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle,

        ShiftEnterExtension({ onSave }),
        FileHandler.configure({
            allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
            onDrop: (currentEditor, files, pos) => {
                files.forEach((file) => {
                    const fileReader = new FileReader()

                    fileReader.readAsDataURL(file)
                    fileReader.onload = () => {
                        currentEditor
                            .chain()
                            .insertContentAt(pos, {
                                type: 'image',
                                attrs: {
                                    src: fileReader.result,
                                },
                            })
                            .focus()
                            .run()
                    }
                })
            },
            onPaste: (currentEditor, files, htmlContent) => {
                files.forEach((file) => {
                    if (htmlContent) {
                        // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
                        // you could extract the pasted file from this url string and upload it to a server for example
                        return false
                    }

                    const fileReader = new FileReader()

                    fileReader.readAsDataURL(file)
                    fileReader.onload = () => {
                        currentEditor
                            .chain()
                            .insertContentAt(currentEditor.state.selection.anchor, {
                                type: 'image',
                                attrs: {
                                    src: fileReader.result,
                                },
                            })
                            .focus()
                            .run()
                    }

                    return
                })
            },
        }),
        Link.configure({
            openOnClick: false,
            autolink: true,
            defaultProtocol: 'https',
        }),
    ]

    if (isLoading) return <XSkeleton length={1} />

    return (
        <div
            onClick={(e) => !readonly && e.stopPropagation()}
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
                <EditorChildrenWrapper {...props}>
                    {customToolbar && (
                        <div className='w-full items-end mt-4 flex justify-end h-[30px]'>
                            <SaveButton onSave={onSave} showSaveButtonTooltip={showSaveButtonTooltip} />
                        </div>
                    )}
                    {children}
                </EditorChildrenWrapper>
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
