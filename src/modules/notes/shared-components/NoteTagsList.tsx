import { observer } from 'mobx-react-lite'
import { capitalize } from 'lodash-es'
import { IconClose } from '@/assets/icons'
import { INoteSchema } from '../shared-services/types'
import { getNoteTags } from '../helpers/getNoteTags'

export const NoteTagsList: React.FC<{ note: INoteSchema; deleteAction?: (goal: string) => void }> = observer(
    ({ note, deleteAction }) => {
        const { noteTags } = getNoteTags(note.tag)

        return (
            <div className='scrollbar-thumb-blue-500/50 scrollbar-track-global-bg scrollbar-thin flex   min-h-[34px] flex-wrap gap-2 overflow-auto'>
                {noteTags.map((tag) => (
                    <div
                        key={tag}
                        className='animate-opacity-5 relative flex w-fit cursor-default rounded-md font-bold text-blue-600'
                    >
                        <span className='p-1'> #{capitalize(tag.trim())}</span>
                        {deleteAction && (
                            <IconClose
                                className={`flex h-full cursor-pointer items-center justify-center rounded-r-md text-red-500`}
                                onClick={() => deleteAction?.(tag)}
                            />
                        )}
                    </div>
                ))}
            </div>
        )
    },
)
