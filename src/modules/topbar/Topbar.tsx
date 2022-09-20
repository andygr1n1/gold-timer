import styles from './Topbar.module.scss'

export const Topbar: React.FC = () => {
    return (
        <div className={styles['topbar']}>
            <div className={styles['topbar-brand']}>Gold Timer</div>
        </div>
    )
}
