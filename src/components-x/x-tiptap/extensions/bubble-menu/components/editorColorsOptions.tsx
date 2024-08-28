import { ColorOption } from './ColorOption'
import { Editor } from '@tiptap/react'
import { type ReactNode } from 'react'

export type IColorOption = { id: string; value: string; label: ReactNode }

export const editorColorsOptions: IColorOption[] = [
    {
        id: 'var(--colors-cText)',
        value: 'var(--colors-cText)',
        label: <ColorOption hex='var(--colors-cText)' title='Default' />,
    },
    {
        id: '#ef4444',
        value: '#ef4444',
        label: <ColorOption hex='#ef4444' title='Sexy' />,
    },
    {
        id: '#f59e0b',
        value: '#f59e0b',
        label: <ColorOption hex='#f59e0b' title='Gold' />,
    },
    {
        id: '#10b981',
        value: '#10b981',
        label: <ColorOption hex='#10b981' title='Tiffany' />,
    },
    {
        id: '#3b82f6',
        value: '#3b82f6',
        label: <ColorOption hex='#3b82f6' title='Mystic' />,
    },
]

export const getCurrentColor = (editor: Editor) => {
    const { doc, selection } = editor.state
    const { from, to } = selection
    let currentColor = 'var(--colors-cText)' // Default color

    doc.nodesBetween(from, to, (node) => {
        if (node.marks) {
            node.marks.forEach((mark) => {
                if (mark.type.name === 'textStyle' && mark.attrs['color']) {
                    currentColor = mark.attrs['color']
                }
            })
        }
    })

    return currentColor
}
