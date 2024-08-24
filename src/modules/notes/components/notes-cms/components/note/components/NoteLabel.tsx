import { IconFolder } from '@/assets/icons'
import { cn } from '@/helpers/cn'
import { INoteSchema } from '@/modules/notes/shared-services/types'

export const NoteLabel: React.FC<{ note: INoteSchema }> = ({ note }) => {
    if (!note?.label?.name) return null
    return (
        <div className='flex w-full items-center gap-2 opacity-70 '>
            <IconFolder className={cn('w-5 h-5', !note?.label?.name && 'opacity-0')} />
            <span className='capitalize font-bold'>{note?.label?.name}</span>
        </div>
    )
}
