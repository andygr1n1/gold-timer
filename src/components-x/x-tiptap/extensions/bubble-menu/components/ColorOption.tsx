import { IconCircle } from '@/assets/icons/IconCircle'
import { useCurrentEditor } from '@tiptap/react'

export const ColorOption: React.FC<{ hex: string; title: string }> = ({ hex, title }) => {
    const { editor } = useCurrentEditor()
    if (!editor) return null

    return (
        <div
            className='flex gap-2 items-center justify-start h-[21px]'
            onClick={() => editor.chain().focus().setColor(hex).run()}
        >
            <IconCircle style={{ color: hex }} className='w-2 h-2' />
            <span className='text-sm'>{title}</span>
        </div>
    )
}
