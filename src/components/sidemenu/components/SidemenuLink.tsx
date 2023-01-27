import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export const SidemenuLink: React.FC<{
    title?: string
    icon?: ReactNode
    disabled?: boolean
    badge?: number
    to: APP_ROUTES_ENUM
    children?: ReactNode
}> = observer(({ title, icon, disabled = false, badge, to, children }) => {
    return (
        <NavLink
            onClick={(e) => {
                if (disabled) {
                    e.preventDefault()
                } else {
                    useSideMenu.is_open && useSideMenu.onChange()
                }
            }}
            to={`/${to}`}
            className={(navData) => {
                return `flex w-full items-center justify-center ${
                    navData.isActive ? 'text-navlink-active [&>*]:font-bold' : 'text-navlink'
                }`
            }}
        >
            {title ? (
                <button
                    className='
                    relative flex h-[25px] w-full cursor-pointer items-center justify-start gap-2 border-none bg-transparent text-left 
                    text-sm text-inherit outline-none duration-300 hover:text-navlink-active  disabled:cursor-default disabled:text-gray-500 '
                    disabled={disabled}
                >
                    {icon ? icon : null}
                    <p className='relative m-0 h-5 w-full p-0'>
                        <span className='absolute top-0'>{title}</span>
                        {badge ? (
                            <span className='absolute right-1 top-[2px] flex min-w-[20px] items-center justify-center rounded-full bg-badge-bg px-1 text-xs font-normal text-white'>
                                {badge}
                            </span>
                        ) : null}
                    </p>
                </button>
            ) : (
                <>{children}</>
            )}
        </NavLink>
    )
})
