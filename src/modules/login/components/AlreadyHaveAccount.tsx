import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const AlreadyHaveAccount: React.FC = observer(() => {
    return (
        <div className='font-droid flex h-10 w-full flex-initial flex-col items-center  justify-center text-sm'>
            Already have an account ?
            <NavLink
                to={`/${APP_ROUTES_ENUM.LOGIN}`}
                className='hover:text-cTextHover cursor-pointer  underline hover:underline'
            >
                Login here
            </NavLink>
        </div>
    )
})
