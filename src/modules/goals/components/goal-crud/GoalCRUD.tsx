import { XModal } from '@/components-x/x-modal/XModal'
import { Provider, useAtom } from 'jotai'
import { selectedGoalAtom, selectedGoalAtom$, selectedGoalId } from '../../stores/selected-goal/selectedGoal.store'
import { PropsWithChildren } from 'react'
import { useAtomDevtools } from 'jotai-devtools'
import { GoalCRUDTitle } from './GoalCRUDTitle'
import { GoalCRUDBody } from './GoalCRUDBody'

export const GoalCRUDProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={selectedGoalAtom$}>
            <GoalCRUD />
            {children}
        </Provider>
    )
}

const GoalCRUD: React.FC = () => {
    useAtomDevtools(selectedGoalAtom)

    const [_selectedGoalId] = useAtom(selectedGoalId)

    const onCancel = () => selectedGoalAtom$.set(selectedGoalAtom, null)

    return (
        <XModal open={!!_selectedGoalId} onCancel={onCancel} title={!!_selectedGoalId && <GoalCRUDTitle />}>
            {_selectedGoalId && <GoalCRUDBody key={_selectedGoalId} />}
        </XModal>
    )
}
