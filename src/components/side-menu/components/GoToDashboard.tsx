import { APP_ROUTES_ENUM } from '@/helpers/globalEnums'
import { useLocation } from 'react-router-dom'
import { SideMenuLink } from './SideMenuLink'
import { GithubLink } from './GithubLink'
import { FigmaLink } from './FigmaLink'
import { Logout } from '@/components/side-menu/components/Logout'
import { ThemeSwitcher } from '@/components/side-menu/components/ThemeSwitcher'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { isUnderDevelopment } from '@/functions/isUnderDevelopment.helper'

export const GoToDashboard = () => {
    const location = useLocation()
    const isDashboard = location.pathname === `/${APP_ROUTES_ENUM.DASHBOARD}`

    return (
        <div className='mx-6 flex flex-col gap-5'>
            <SideMenuLink to={APP_ROUTES_ENUM.DASHBOARD} className={isDashboard ? '!opacity-100' : ''}>
                <StyledButton rounded className='!w-full' size='extraLarge'>
                    Dashboard
                </StyledButton>
            </SideMenuLink>
            <XMenuDivider />
            <div className='flex h-[45px] w-full items-center justify-center gap-2'>
                {isUnderDevelopment() && (
                    <>
                        <GithubLink />
                        <FigmaLink />
                    </>
                )}
                <ThemeSwitcher />
                <Logout />
            </div>
        </div>
    )
}
