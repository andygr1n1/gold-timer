import { observer } from 'mobx-react-lite'
import { LoginLogoSm } from './LoginLogo'

export const AnonymousFooter: React.FC = observer(() => {
    return (
        <div className='relative flex h-10 items-center justify-between  bg-global-2-bg px-10  text-xs xl:h-20'>
            <LoginLogoSm />
            <span className='absolute right-0 mx-10 cursor-default text-[10px]'> Energy bit production</span>
        </div>
    )
})
