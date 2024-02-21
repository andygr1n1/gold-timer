import { useFetchGoal } from '../../service/fetchGoalById/useFetchGoal'
import { ViewGoalDialogBody } from './components/view-goal/ViewGoalDialogBody'
import { EditGoalDialogBody } from './components/edit-goal/EditGoalDialogBody'
import { GoalCRUDActions } from './GoalCRUDActions'

export const GoalCRUDBody = () => {
    const { isLoading, goal, isEdit } = useFetchGoal()

    return !isLoading && goal ? (
        <>
            <GoalCRUDActions goal={goal} />

            {!isEdit && <ViewGoalDialogBody goal={goal} />}
            {isEdit && <EditGoalDialogBody goal={goal} />}
        </>
    ) : null
}
