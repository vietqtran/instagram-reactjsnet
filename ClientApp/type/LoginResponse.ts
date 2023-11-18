import { UserVM } from "./UserVM";

export interface LoginResponse {
    accessToken: string,
    error: string,
    refreshToken: string,
    status: string,
    user: UserVM
}