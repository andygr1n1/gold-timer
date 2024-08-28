import { type ReactNode } from 'react'

export type IXModal = {
    open: boolean
    onCancel: () => void
    children?: ReactNode
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement> | undefined) => void
    cancelOnEscape?: boolean
    closeIcon?: boolean
    fullHeight?: boolean
} & ({ title?: ReactNode; customBody?: never } | { title?: never; customBody?: ReactNode; children?: never })
