import { observer } from 'mobx-react-lite'
import { INote$ } from '../mst/types'
import { capitalize } from 'lodash-es'
import { Icon } from '@iconify/react'

export const NoteTagsList: React.FC<{ note: INote$; deleteAction?: (goal: string) => void }> = observer(
    ({ note, deleteAction }) => {
        const { noteTags } = note
        return (
            <div className='scrollbar-thumb-blue-500 scrollbar-track-global-bg scrollbar-thin flex max-h-[34px]  min-h-[34px] flex-wrap gap-2 overflow-auto'>
                {noteTags.map((tag) => (
                    <div
                        key={tag}
                        className='animate-opacity-5 relative flex w-fit cursor-default rounded-md font-bold text-blue-600'
                    >
                        <span className='p-1'> #{capitalize(tag.trim())}</span>
                        {deleteAction && (
                            <Icon
                                icon='line-md:menu-to-close-transition'
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
