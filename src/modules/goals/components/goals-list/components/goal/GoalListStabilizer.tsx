import clsx from 'clsx'
import styles from './Goal.module.scss'

export const GoalListStabilizer: React.FC = () => {
    return (
        <>
            <div className={clsx(styles['goal-container'], '!h-0 !border-transparent !bg-transparent !py-0 ')} />
            <div className={clsx(styles['goal-container'], '!h-0 !border-transparent !bg-transparent !py-0 ')} />
        </>
    )
}
