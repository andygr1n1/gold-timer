import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { AnimatePresence, motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { ReactNode, useState } from 'react'

export const XTooltip: React.FC<{ title: string; children: ReactNode }> = observer(({ children, title }) => {
    const [isShown, setIsShown] = useState<boolean>(false)
    const [mobileTrigger, setMobileTrigger] = useState<boolean>(false)
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    return (
        <div
            className='relative flex'
            onTouchStartCapture={() => {
                setMobileTrigger(true)
            }}
            onTouchEndCapture={() => {
                setMobileTrigger(false)
            }}
            onTouchStart={() => {
                const timer = setTimeout(() => {
                    mobileTrigger && setIsShown(() => true)
                    clearTimeout(timer)
                }, 300)
            }}
            onTouchEnd={() => {
                setIsShown(false)
            }}
            onMouseEnter={() => isDesktop && setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <>{children}</>
            <AnimatePresence>
                {isShown && (isDesktop ? isDesktop : mobileTrigger) && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='
                        absolute left-0 top-0 z-[1000]  w-max max-w-[150px] translate-x-[5%] translate-y-[-120%]
                        cursor-default rounded-md bg-zinc-900 bg-opacity-90 p-2 
                        text-sm text-gray-100'
                    >
                        {title}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    )
})
