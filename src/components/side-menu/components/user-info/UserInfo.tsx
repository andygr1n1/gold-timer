import { UserAvatarSideMenu } from './UserAvatar'
import { UserName } from './UserName'
import { useFetchUserArtifactsInfo } from './service/useFetchUserArtifactsInfo'

export const UserInfo: React.FC = () => {
    const { isLoading, name, avatar } = useFetchUserArtifactsInfo()
    return (
        <div className=' min-h-[220px]'>
            {!isLoading && (
                <div className='animate-opacity-3 relative flex min-h-[220px] flex-col items-center justify-center gap-5'>
                    <UserName name={name} />
                    <UserAvatarSideMenu avatar={avatar} />
                </div>
            )}
        </div>
    )
}
