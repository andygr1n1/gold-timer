import { APP_ROUTES_ENUM } from '@/services/enums'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const AlreadyHaveAccount: React.FC = observer(() => {
    return (
        <div className='font-kzen flex my-4 h-10 w-full flex-initial flex-col items-center justify-center'>
            <div className='text-xs opacity-70 cursor-default '>Already have an account?</div>
            <NavLink
                className='cursor-pointer text-sm opacity-70 hover:text-blue-600 hover:underline hover:opacity-100'
                to={`/${APP_ROUTES_ENUM.LOGIN}`}
            >
                Login
            </NavLink>
        </div>
    )
})
