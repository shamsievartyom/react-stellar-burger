export const SET_AUTH_CHECK: 'SET_AUTH_CHECK' = 'SET_AUTH_CHECK'
export const SET_USER: 'SET_USER' = 'SET_USER'

export type TUserUser = {
    email: string,
    name: string,
}

export interface ISetAuthCheckAction {
    readonly type: typeof SET_AUTH_CHECK;
    readonly payload: boolean,
}

export interface ISetUserAction {
    readonly type: typeof SET_USER;
    readonly payload: TUserUser | null,
}

export type userActions = ISetAuthCheckAction | ISetUserAction