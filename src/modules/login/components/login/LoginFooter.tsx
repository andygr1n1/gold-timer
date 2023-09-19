import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const LoginFooter: React.FC = observer(() => {
    return (
        <div className='font-droid flex h-10 w-full flex-initial flex-col items-center justify-center '>
            <NavLink
                className=' hover:text-cTextHover cursor-pointer  text-sm hover:underline'
                to={`/${APP_ROUTES_ENUM.REGISTER}`}
            >
                Register
            </NavLink>
            <NavLink
                className='width-[200px]  hover:text-cTextHover cursor-pointer  text-xs'
                to={`/${APP_ROUTES_ENUM.RESTORE_ACCOUNT}`}
            >
                Forgot password?
                <span className='text-cText hover:text-cTextHover px-1 hover:underline'>Restore it</span>
            </NavLink>
        </div>
    )
})
