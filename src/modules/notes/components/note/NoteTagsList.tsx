import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { capitalize, compact } from 'lodash-es'

export const NoteTagsList: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const noteTags = compact(note.tag.split(','))

    if (!noteTags.length) return null

    const deleteTag = (t: string) => {
        const newTag = noteTags.filter((noteTag) => noteTag !== t)
        note.onChangeField('tag', newTag.toString())
    }

    return (
        <div className='flex flex-wrap gap-2'>
            {noteTags.map((tag) => (
                <div key={tag} className='bg-xBlue-2 text-cText relative flex w-fit cursor-default rounded-md'>
                    <span className='p-1'> {capitalize(tag.trim())}</span>
                    <span
                        onClick={() => deleteTag(tag)}
                        className='flex items-center justify-center rounded-r-md bg-red-500 p-1'
                    >
                        x
                    </span>
                </div>
            ))}
        </div>
    )
})
