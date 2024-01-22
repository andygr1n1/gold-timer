import { onThemeChange, themingAtom } from '@/modules/stores/themingStore'
import { Icon } from '@iconify/react'
import { useAtom } from 'jotai'

export const ThemeSwitcher: React.FC = () => {
    const [theming] = useAtom(themingAtom)
    const [, onChange] = useAtom(onThemeChange)

    return (
        <>
            <div
                className={`relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-transparent`}
                onClick={onChange}
            >
                {!theming.night && (
                    <Icon
                        icon='line-md:sunny-filled-loop-to-moon-filled-loop-transition'
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                )}
                {theming.night && (
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
