import { observer } from 'mobx-react-lite'
import styles from './AnonymousFooter.module.scss'
import { LoginLogoSm } from './LoginLogo'
export const AnonymousFooter: React.FC = observer(() => {
    return (
        <div className='relative flex h-20 items-center justify-between bg-transparent'>
            <div className={styles['triangle-left']} />
            <div className={styles['triangle-right']} />
            <div className={styles['bottom']} />
            <LoginLogoSm />
        </div>
    )
})
