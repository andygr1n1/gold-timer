import { NotepadInput } from './components/NotepadInput'
import styles from './NotepadIndex.module.scss'

export const NotepadIndex = () => {
    return (
        <div className={styles['notepad-index']}>
            <NotepadInput />
        </div>
    )
}
