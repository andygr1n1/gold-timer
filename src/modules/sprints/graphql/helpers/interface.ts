export interface ISprintsDays {
    id?: string
    date: Date | null
    status: boolean | null
}

export interface IInsertNewSprint {
    id?: string
    title: string
    description: string | null
    duration: number
    img_path: string | null
    achievement: string | null
    started_at: Date
    finished_at: Date | null
    sprint_days: ISprintsDays[]
    sprint_goals: string | null
    owner_id: string
    parent_sprint_id?: string | null
}

export interface IEditSprintReq {
    title: string
    description: string | null
    img_path: string | null
    achievement: string | null
    started_at: Date
    finished_at: Date | null
    sprint_goals: string | null
    sprint_days: ISprintsDays[]
}
