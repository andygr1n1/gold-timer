import { APP_ROUTES_ENUM } from '@/lib/enums'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const AlreadyHaveAccount: React.FC = observer(() => {
    return (
        <div className='font-kzen flex h-10 w-full flex-initial flex-col items-center  justify-center'>
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
