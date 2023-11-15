import { useTheming } from '@/hooks/useTheming.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const ThemeSwitcher: React.FC = observer(() => {
    return (
        <>
            <div
                className={`relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-transparent`}
                onClick={useTheming.onChange}
            >
                {!useTheming.night && (
                    <Icon
                        icon='line-md:sunny-filled-loop-to-moon-filled-loop-transition'
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                )}
                {useTheming.night && (
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
})
