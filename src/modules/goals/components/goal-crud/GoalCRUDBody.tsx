import { useFetchGoal } from './service/useFetchGoal'
import { ViewGoalDialogBody } from './components/view-goal/ViewGoalDialogBody'
import { EditGoalDialogBody } from './components/edit-goal/EditGoalDialogBody'
import { GoalManagerActions } from './GoalManagerActions'

export const GoalCRUDBody = () => {
    const { isLoading, goal, isEdit } = useFetchGoal()

    return !isLoading && goal ? (
        <>
            <GoalManagerActions goal={goal} />
            {/* <GoalDetails goal={goal} /> */}
            {!isEdit && <ViewGoalDialogBody goal={goal} />}
            {isEdit && <EditGoalDialogBody goal={goal} />}
        </>
    ) : null
}
