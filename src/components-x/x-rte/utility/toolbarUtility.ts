import { EditorState } from 'draft-js'
import { z } from 'zod'

export const toolBarItemSchema = z.enum(['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'CODE'])

export const toolbarItems = toolBarItemSchema.Values

export type IToolbarItemSchema = z.infer<typeof toolBarItemSchema>

export const isToolBarItemActive = (editorState: EditorState, toolbarItem: IToolbarItemSchema) => {
    const currentStyle = editorState.getCurrentInlineStyle()
    return currentStyle.has(toolbarItem)
}
