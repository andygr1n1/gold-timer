import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'

export const CryptoIndex: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.CRYPTO}>
            <object
                className='h-[calc(100vh-190px)] min-h-[700px] w-full'
                data='https://cryptobubbles.net#currencies=1,52,74,1027,1732,1839,1966,1975,2424,3773,3794,3911,4030,5426,5690,5805,5994,6138,6636,7080,7431,7533,8000,8916,9481,10223,10603,10804,11840,11841,13631,17591,19843,20009,20396,20947,21794,23756,28298,28778,28846'
            />
        </ModuleWrapper>
    )
}
