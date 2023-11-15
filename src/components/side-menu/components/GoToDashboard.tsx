import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useLocation } from 'react-router-dom'
import { SideMenuLink } from './SideMenuLink'
import { GithubLink } from './GithubLink'
import { FigmaLink } from './FigmaLink'
import { Logout } from '@/modules/profile/components/top-bar/Logout'
import { ThemeSwitcher } from '@/modules/profile/components/top-bar/ThemeSwitcher'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'

export const GoToDashboard = () => {
    const location = useLocation()
    const isDashboard = location.pathname === `/${APP_ROUTES_ENUM.DASHBOARD}`

    return !isDashboard ? (
        <SideMenuLink to={APP_ROUTES_ENUM.DASHBOARD} className='!opacity-100'>
            <StyledButton rounded className='mx-6 w-full' size='extraLarge'>
                Dashboard
            </StyledButton>
        </SideMenuLink>
    ) : (
        <div className='mx-6'>
            <XMenuDivider />
            <div className='flex h-[45px] w-full items-center justify-center gap-2'>
                <GithubLink />
                <FigmaLink />
                <ThemeSwitcher />
                <Logout />
            </div>
        </div>
    )
}
