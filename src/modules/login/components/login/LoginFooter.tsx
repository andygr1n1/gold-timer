import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const LoginFooter: React.FC = observer(() => {
    return (
        <div className='flex h-10 w-full flex-initial flex-col items-center justify-center font-sans '>
            <NavLink
                className=' cursor-pointer text-sm  hover:text-cTextHover hover:underline'
                to={`/${APP_ROUTES_ENUM.REGISTER}`}
            >
                Register
            </NavLink>
            <NavLink
                className='width-[200px]  cursor-pointer text-xs  hover:text-cTextHover'
                to={`/${APP_ROUTES_ENUM.RESTORE_ACCOUNT}`}
            >
                Forgot password?
                <span className='px-1 text-cText hover:text-cTextHover hover:underline'>Restore it</span>
            </NavLink>
        </div>
    )
})
