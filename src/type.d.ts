export interface User {
    email: string,
    password: string,
    name?: string,
    avatar?: string
}

export interface AuthProviderInterface {
    authToken: string,
    user: User,
    isError: string,
    isLoading: boolean,
    login: ({ email, password }: User, callback: VoidFunction) => Promise<true | null>,
    logout: () => Promise<true | null>,
    registerUser: ({ email, password }: User) => Promise<true | null>,
    getUser: () => Promise<true | null>,
    refreshToken: () => Promise<string | null>
}