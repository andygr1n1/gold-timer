import { useThemming } from '@/hooks/useThemming.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const ThemeSwitcher: React.FC = observer(() => {
    return (
        <>
            <div
                className={`relative flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-transparent  p-2 `}
                onClick={useThemming.onChange}
            >
                {!useThemming.night && (
                    <Icon
                        icon='line-md:sunny-filled-loop-to-moon-filled-loop-transition'
                        width={20}
                        height={20}
                        className='text-navlink hover:text-navlink-active duration-300'
                    />
                )}
                {useThemming.night && (
                    <Icon
                        icon='line-md:moon-alt-to-sunny-outline-loop-transition'
                        width={20}
                        height={20}
                        className='text-navlink hover:text-navlink-active duration-300'
                    />
                )}
            </div>
        </>
    )
})
