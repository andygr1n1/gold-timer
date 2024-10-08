import type { IAch } from '@/modules/achievements/services/types'
import { AchStatus } from '../shared-components/ach-status/AchStatus'
import styles from '../shared-components/Ach.module.scss'
import { cn } from '@/helpers/cn'
import { useState } from 'react'
import { AchMobileMenu } from './components/AchMobileMenu'

const AchMobile: React.FC<{ ach: IAch }> = ({ ach }) => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <div
                className={cn(styles['ach'], `flex-[41%] max-w-[41%] relative`)}
                onClick={() => setOpenDrawer((prev) => !prev)}
            >
                <img
                    src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${ach.img_path}`}
                    className='animate-opacity-3 w-full flex h-full rounded-lg'
                    alt={ach.title}
                />
                <AchStatus ach={ach} isMobile={true} />
            </div>
            <AchMobileMenu ach={ach} openDrawer={openDrawer} onClose={() => setOpenDrawer(false)} />
        </>
    )
}

export default AchMobile
