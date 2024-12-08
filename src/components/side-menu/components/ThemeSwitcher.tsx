import { IconSunny, IconMoon } from '@/assets/icons'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'

export const ThemeSwitcher: React.FC = () => {
    const { darkTheme, toggleTheme } = useRoot$()
    return (
        <>
            <div
                className={`relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-transparent`}
                onClick={() => toggleTheme()}
            >
                {darkTheme ? (
                    <IconMoon
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                ) : (
                    <IconSunny
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                )}
            </div>
        </>
    )
}
