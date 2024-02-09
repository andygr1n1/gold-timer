import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/lib/enums'

export const Stories: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.SMART_CONTRACTS}>
            <div className='mx-auto flex h-full w-full flex-col items-center justify-center gap-5'>
                <div> first story: a module that will describe memories timeline</div>
                <div># Andy and Dasha</div>
                <div>first hug - 13 april, ready player one</div>
                <div>pousada de sagres (pousada palacio estoi) - first kiss 14 april 2022</div>
            </div>
        </ModuleWrapper>
    )
}
