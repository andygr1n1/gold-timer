import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { cryptoBubblesCount, cryptoBubblesLink } from './helpers/cryptoBubblesLink'

export const CryptoIndex: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.CRYPTO}>
            <object className='h-[calc(100vh-190px)] min-h-[700px] w-full' data={cryptoBubblesLink()} />
            <div className='font bold text-cText'>Currencies: {cryptoBubblesCount()}</div>
        </ModuleWrapper>
    )
}
