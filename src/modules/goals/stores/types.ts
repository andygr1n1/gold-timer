//*
// is_redirect_from_view_mode to understand if edit was clicked from view mode
//
export type ISelectedGoal = {
    id: string
    is_edit: boolean
    is_new: boolean
    is_redirect_from_view_mode?: boolean
    parent_goal_id?: string
    is_new_ritual?: boolean
}
export type ISelectedGoalState = 'view' | 'edit' | 'create' | 'create child' | 'ritualize'
