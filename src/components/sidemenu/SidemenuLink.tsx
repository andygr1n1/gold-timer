import { APP_ROUTES_ENUM } from '@/helpers/enums'
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
            onClick={(e) => disabled && e.preventDefault()}
            to={`/${to}`}
            className={(navData) => {
                return `flex w-full items-center justify-center ${
                    navData.isActive ? 'text-white [&>*]:font-bold' : 'text-gray-300'
                }`
            }}
        >
            {title ? (
                <button
                    className='flex h-[25px] w-full cursor-pointer items-center justify-start gap-2 border-none bg-transparent text-left 
                    text-sm outline-none duration-300 hover:text-white disabled:cursor-default disabled:text-gray-500 '
                    disabled={disabled}
                >
                    {icon ? icon : null}
                    <p className='m-0 p-0'>{title}</p>
                    {badge ? (
                        <span className='flex min-w-[20px] items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-normal'>
                            {badge}
                        </span>
                    ) : null}
                </button>
            ) : (
                <>{children}</>
            )}
        </NavLink>
    )
})
