export interface ISprintsDays {
    id?: string
    date: Date | null
    status: boolean | null
    sprint_id?: string
}

export interface ISprintsGoals {
    id: string
    title: string
    status: boolean | null
    sprint_id?: string
}

export interface IInsertNewSprint {
    id?: string
    title: string
    description: string | null
    duration: number
    img_path: string | null
    achievement: string | null
    started_at: Date
    sprints_days: { data: ISprintsDays[] }
    sprints_goals?: { data: ISprintsGoals[] }
    owner_id: string
    parent_sprint_id?: string | null
}

export interface IEditSprintReq {
    title: string
    description: string | null
    img_path: string | null
    achievement: string | null
    started_at: Date
}