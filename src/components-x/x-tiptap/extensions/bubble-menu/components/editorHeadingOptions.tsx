import { type Level } from '@tiptap/extension-heading'
import { Editor } from '@tiptap/react'
import { type ReactNode } from 'react'

export type IHeaderOption = { id: Level; value: string; label: ReactNode }

export const editorHeadingsOptions: IHeaderOption[] = [
    { id: 6, value: 'Text', label: 'Text' },
    { id: 1, value: 'Heading 1', label: 'Heading 1' },
    { id: 2, value: 'Heading 2', label: 'Heading 2' },
    { id: 3, value: 'Heading 3', label: 'Heading 3' },
]

export const getHeadingValue = (editor: Editor) => {
    const isHeading = editorHeadingsOptions.find((opt) => !!editor.isActive('heading', { level: opt.id }))

    return isHeading?.id ? isHeading.label : editorHeadingsOptions[0]?.label
}
