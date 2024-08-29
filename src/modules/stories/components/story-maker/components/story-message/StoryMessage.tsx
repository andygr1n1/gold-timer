import { XTiptap } from '@/components-x/x-tiptap/XTiptap'
import type { IStoryMessage } from '@/modules/stories/services/types'

export const StoryMessage: React.FC<{ message: IStoryMessage }> = ({ message }) => {
    return <div>{message.description && <XTiptap readonly content={message.description} />}</div>
}
