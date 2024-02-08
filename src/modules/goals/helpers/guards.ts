import { goal_status_enum_enum } from '@/graphql/generated'
import { GOAL_STATUS_ENUM } from '@/lib/enums'

export const isCompleted = (status: goal_status_enum_enum) => {
    return status === GOAL_STATUS_ENUM.COMPLETED
}
