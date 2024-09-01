import { Plugin, PluginKey } from 'prosemirror-state'
import { Extension } from '@tiptap/react'

export const ShiftEnterExtension = ({
    onSave,
}: {
    onSave?: (props: { html: string; clearEditor: () => void }) => void
}) => {
    return Extension.create({
        name: 'ShiftEnterExtension',

        addProseMirrorPlugins() {
            return [
                new Plugin({
                    key: new PluginKey('ShiftEnterExtension'),
                    props: {
                        handleKeyDown(view, event) {
                            const html = view.dom.innerHTML
                            const clearEditor = () => {
                                const { tr } = view.state
                                const emptyDoc = view.state.schema.nodes['doc']?.createAndFill()
                                if (!emptyDoc) return
                                const transaction = tr.replaceWith(0, view.state.doc.content.size, emptyDoc)
                                view.dispatch(transaction)
                            }
                            if (event.key === 'Enter' && event.shiftKey) {
                                onSave?.({ html, clearEditor })
                                event.preventDefault()
                                return true
                            }
                            return false
                        },
                    },
                }),
            ]
        },
    })
}
