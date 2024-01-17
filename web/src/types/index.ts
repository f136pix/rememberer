export type INewUserReq = {
    email:string,
    password:string
}

export type IUser = {
    id: number,
    email: string,
    name: string,
}

export type IContextType = {
    user: IUser,
    isLoading: boolean,
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    checkAuthUser: () => Promise<boolean>
}
