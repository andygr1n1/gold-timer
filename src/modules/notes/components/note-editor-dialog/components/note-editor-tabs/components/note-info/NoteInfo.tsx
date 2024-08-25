import { NoteDescriptionRichInput } from './components/NoteDescriptionRichInput'
import { NoteCreatedAt } from './components/NoteCreatedAt'
import { NoteTagInput } from './components/NoteTagInput'
import { NoteLabelSelect } from './components/NoteLabelSelect'

export const NoteInfo: React.FC = () => {
    return (
        <>
            <NoteCreatedAt />
            <div className='flex flex-col gap-5'>
                <NoteDescriptionRichInput />
                <NoteLabelSelect />
                <NoteTagInput />
            </div>
        </>
    )
}
