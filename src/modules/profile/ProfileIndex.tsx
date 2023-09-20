import { ModuleWrapper } from '@/components/ModuleWrapper'
import { observer } from 'mobx-react-lite'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { GoalsInfo } from './components/goals-info/GoalsInfo'
import { Logout } from './components/top-bar/Logout'
import { ThemeSwitcher } from './components/top-bar/ThemeSwitcher'

export const ProfileIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.PROFILE}
            topBarNodes={
                <>
                    <Logout />
                    <ThemeSwitcher />
                </>
            }
        >
            <div className='flex flex-col xl:flex-row gap-20'>
                <div className='bg-global-2-bg w-fit flex flex-col gap-14 rounded-md p-4 py-14 md:p-14'>
                    <ProfileDetails />
                </div>
                <div className='bg-global-2-bg flex-auto flex w-[calc(100%-30px)] flex-col gap-14 rounded-md p-4 py-14 md:p-14'>
                    <GoalsInfo />
                </div>
            </div>
        </ModuleWrapper>
    )
})
