import { ModuleWrapper } from '@/components/ModuleWrapper'
import { UserCoins } from '@/components/side-menu/components/UserCoins'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { observer } from 'mobx-react-lite'

export const StoriesIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop', 'isLargeDesktop'])

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.SMART_CONTRACTS}
            topBarNodes={
                <div className='relative flex w-full font-bold'>
                    <div className='absolute left-0  top-1/2  -translate-y-1/2'> {isDesktop && <UserCoins />}</div>
                </div>
            }
        >
            <div className='mx-auto flex h-full w-full flex-col items-center justify-center gap-5'>
                <div> first story: a module that will describe memories timeline</div>
                <div># Andy and Dasha</div>
                <div>first hug - 13 april, ready player one</div>
                <div>pousada de sagres (pousada palacio estoi) - first kiss 14 april 2022</div>
            </div>
        </ModuleWrapper>
    )
})