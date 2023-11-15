import { XBadge } from '@/components-x/x-badge/XBadge'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export const SideMenuLink: React.FC<{
    title?: string
    icon?: ReactNode
    disabled?: boolean
    badge?: number
    to: APP_ROUTES_ENUM
    children?: ReactNode
    className?: string
}> = observer(({ title, icon, disabled = false, badge, to, children, className }) => {
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
                return clsx(
                    `flex w-full items-center justify-center ${
                        navData.isActive ? 'text-blue-700 opacity-100' : 'text-cText opacity-70'
                    }`,
                    className,
                )
            }}
        >
            {title ? (
                <>
                    <button
                        className='
                    relative flex h-[25px] w-full cursor-pointer items-center justify-start gap-2 border-none bg-transparent text-left 
                    text-inherit outline-none duration-300 hover:text-blue-600  disabled:cursor-default disabled:text-gray-500 '
                        disabled={disabled}
                    >
                        <div className='flex h-5 w-10 items-center justify-center'> {icon ? icon : null}</div>
                        <p className='relative m-0 h-5 w-full p-0'>
                            <span className='absolute top-0'>{title}</span>
                        </p>
                    </button>
                    <XBadge count={badge} offset={[-5, 0]} />
                </>
            ) : (
                <>{children}</>
            )}
        </NavLink>
    )
})
