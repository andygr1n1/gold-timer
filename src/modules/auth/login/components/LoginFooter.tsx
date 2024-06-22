import { APP_ROUTES_ENUM } from '@/services/enums'
import { NavLink } from 'react-router-dom'

export const LoginFooter = () => {
    return (
        <div className='font-kzen flex my-4 h-10 w-full flex-initial flex-col items-center justify-center'>
            <NavLink
                className='cursor-pointer text-sm opacity-70 hover:text-blue-600 hover:underline hover:opacity-100'
                to={`/${APP_ROUTES_ENUM.REGISTER}`}
            >
                Register
            </NavLink>
            <NavLink
                className='width-[200px] cursor-pointer text-xs opacity-70 hover:text-blue-600 hover:opacity-100'
                to={`/${APP_ROUTES_ENUM.RESTORE_ACCOUNT}`}
            >
                Forgot password?
                <span className='px-1 hover:underline'>Restore it</span>
            </NavLink>
        </div>
    )
}
