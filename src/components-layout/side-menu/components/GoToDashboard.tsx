import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useLocation } from 'react-router-dom'
import { SideMenuLink } from './SideMenuLink'
import { RoundedButton } from '@/components-x/RoundedButton'
import { GithubLink } from './GithubLink'
import { FigmaLink } from './FigmaLink'

export const GoToDashboard = () => {
    const location = useLocation()
    const isDashboard = location.pathname === `/${APP_ROUTES_ENUM.DASHBOARD}`

    return !isDashboard ? (
        <SideMenuLink to={APP_ROUTES_ENUM.DASHBOARD}>
            <RoundedButton className='my-5 w-[130px] px-2 !text-xs'>Go to Dashboard</RoundedButton>
        </SideMenuLink>
    ) : import.meta.env.DEV ? (
        <div className='my-5 flex h-[45px] w-full items-center justify-center gap-2'>
            <GithubLink />
            <FigmaLink />
        </div>
    ) : null
}
