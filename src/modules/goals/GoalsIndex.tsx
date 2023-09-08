import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { PageGoals } from '@/modules/goals/PageGoals'
import { observer } from 'mobx-react-lite'

export const GoalsIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.GOALS}>
            <div className='mt-5 h-[calc(100%-150px)] w-full overflow-auto rounded-md'>
                <PageGoals />
            </div>
        </ModuleWrapper>
    )
})
