import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const AlreadyHaveAccount: React.FC = observer(() => {
    return (
        <div className='flex h-10 w-full flex-initial flex-col items-center justify-center  font-sans text-sm'>
            Already have an account ?
            <NavLink
                to={`/${APP_ROUTES_ENUM.LOGIN}`}
                className='cursor-pointer underline  hover:text-cTextHover hover:underline'
            >
                Login here
            </NavLink>
        </div>
    )
})
