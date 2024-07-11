import { NoteDescriptionRichInput } from './components/NoteDescriptionRichInput'
import { NoteCreatedAt } from './components/NoteCreatedAt'
import { NoteTagInput } from './components/NoteTagInput'

export const NoteInfo: React.FC = () => {
    return (
        <>
            <NoteCreatedAt />
            <div className='flex flex-col gap-5'>
                {/* <GoalTitleInput /> */}
                {/* <GoalSloganInput /> */}
                <NoteDescriptionRichInput />
                <NoteTagInput />
                {/* <GoalFinishCalendarInput /> */}
            </div>
        </>
    )
}
