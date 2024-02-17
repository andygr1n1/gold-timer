import { useFetchGoal } from '../../service/fetchGoalById/useFetchGoal'
import { ViewGoalDialogBody } from './components/view-goal/ViewGoalDialogBody'
import { EditGoalDialogBody } from './components/edit-goal/EditGoalDialogBody'
import { GoalDetails } from './components/common-components/GoalDetails'
import { GoalCRUDActions } from './GoalCrudActions'

export const GoalCRUDBody = () => {
    const { isLoading, goal, isEdit } = useFetchGoal()

    return !isLoading && goal ? (
        <>
            <GoalCRUDActions goal={goal} />
            <GoalDetails goal={goal} />
            {!isEdit && <ViewGoalDialogBody goal={goal} />}
            {isEdit && <EditGoalDialogBody goal={goal} />}
        </>
    ) : null
}
