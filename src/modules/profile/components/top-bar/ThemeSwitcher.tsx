import { darkModeAtom } from '@/modules/stores/themingStore'
import { Icon } from '@iconify/react'
import { useAtom } from 'jotai'

export const ThemeSwitcher: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom)

    return (
        <>
            <div
                className={`relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-transparent`}
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {!isDarkMode && (
                    <Icon
                        icon='line-md:sunny-filled-loop-to-moon-filled-loop-transition'
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                )}
                {isDarkMode && (
                    <Icon
                        icon='line-md:moon-alt-to-sunny-outline-loop-transition'
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                )}
            </div>
        </>
    )
}
