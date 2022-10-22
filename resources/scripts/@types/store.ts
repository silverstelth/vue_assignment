export interface User {
    name: string,
    gender: number,
    dateofbirth: string
}

export interface UserState {
    user: User | {}
}


export interface State {
    layout: {
        sidebarVisible: boolean
    }
}