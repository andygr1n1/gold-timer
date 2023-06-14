export interface IValues {
    email: string
    password: string
    remember: boolean
}

export interface IRegisterValues {
    name: string
    email: string
    password: string
    passwordRepeat: string
}

export interface ILoginRes {
    user_id: string
    remember: boolean
}

export interface IRestoreAccRes {
    email: string
}
