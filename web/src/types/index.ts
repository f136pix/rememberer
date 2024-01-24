import dateComponent from "@/components/shared/DateComponent.tsx";

export type IUserReq = {
    email:string,
    password:string
}

export type IRegisterUserReq = {
    email: string,
    name: string,
    password: string,
    password_confirmation: string
}

export type IUser = {
    id: number,
    email: string,
    name: string,
}

export type ITask = {
    id: number,
    title: string,
    description: string,
    target_date: Date,
    is_team: boolean,
    done: boolean,
    priority: number,
    team: ITeam,
    user: IUser,
    created_at: Date,
    updated_at: Date
}

export type ITeam = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    creator: IUser
    tasks : [ITask]
    users: [IUser]

}

export type IContextType = {
    user: IUser,
    isLoading: boolean,
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    checkAuthUser: () => Promise<boolean>
}
