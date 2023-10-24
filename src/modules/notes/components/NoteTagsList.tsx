import { observer } from 'mobx-react-lite'
import { INote$ } from '../mst/types'
import { capitalize } from 'lodash-es'
import { Icon } from '@iconify/react'

export const NoteTagsList: React.FC<{ note: INote$; deleteAction?: (goal: string) => void }> = observer(
    ({ note, deleteAction }) => {
        const { noteTags } = note
        return (
            <div className='flex max-h-[35px] min-h-[36px] flex-wrap gap-2 overflow-auto'>
                {noteTags.map((tag) => (
                    <div key={tag} className='relative flex w-fit cursor-default rounded-md bg-blue-700 text-white'>
                        <span className='p-1'> {capitalize(tag.trim())}</span>
                        {deleteAction && (
                            <Icon
                                icon='line-md:menu-to-close-transition'
                                className={`flex h-full cursor-pointer items-center justify-center rounded-r-md bg-red-500`}
                                onClick={() => deleteAction?.(tag)}
                            />
                        )}
                    </div>
                ))}
            </div>
        )
    },
)
