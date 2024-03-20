import { LockedStatusIndex } from './components/LockedStatusIndex'
import { NotepadInput } from './components/NotepadInput'
import styles from './NotepadIndex.module.scss'

export const NotepadIndex: React.FC = () => {
    return (
        <div className={styles['notepad-index']}>
            <NotepadInput />
            <LockedStatusIndex />
        </div>
    )
}
