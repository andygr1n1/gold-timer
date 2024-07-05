import { EditorProps } from 'draft-js'

export type IXrte = Partial<EditorProps> & {
    isLoading?: boolean
    onChangeContent: (data: string) => void
    content: string
    toolbarExtend?: React.ReactNode
    showToolbar?:boolean
    showToolbarExtend?:boolean
    showBaseToolbar?:boolean
}


export type IColorStyle = {
    color: string
}

export type IColorStyleMap = {
    [key: string]: IColorStyle
}