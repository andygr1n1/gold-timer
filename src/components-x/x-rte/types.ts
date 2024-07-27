import { EditorProps } from 'draft-js'

export type IEditorCore = Partial<EditorProps> & {
    onChangeContent?: (data: string) => void
    content?: string | null
    toolbarExtend?: React.ReactNode
    showToolbar?: boolean
    smallBaseToolbar?: boolean
    showBaseToolbar?: boolean
    error?: boolean
    errorMessage?: string
    wrapperClassName?: string
}

export type IKzenEditor = Partial<EditorProps> &
    IEditorCore & {
        isLoading: boolean
    }

export type IColorStyle = {
    color: string
}

export type IColorStyleMap = {
    [key: string]: IColorStyle
}
