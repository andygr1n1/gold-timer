import { XBadge } from '@/components-x/x-badge/XBadge'
import { StyledButton } from '@/components/buttons/StyledButton'
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
                    `flex w-full items-center  opacity-70 ${
                        navData.isActive ? '!text-blue-700 !opacity-100' : '!text-cText'
                    }`,
                    className,
                )
            }}
        >
            {title ? (
                <>
                    <StyledButton
                        variant='text'
                        className='!p-0 font-bold !text-inherit duration-300 hover:!text-blue-600'
                        disabled={disabled}
                        startIcon={icon}
                    >
                        {title}
                    </StyledButton>
                </>
            ) : (
                <>{children}</>
            )}
        </NavLink>
    )
})
