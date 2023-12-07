import { LoginCredentials } from "@type/requestModels/LoginCredentials"
import { SignUpCredentials } from "@type/requestModels/SignUpCredential"
import instance from "./_axios_instance"

const END_POINT = {
    USER: 'user',
    AUTH_LOGIN: 'user/login',
    AUTH_REGISTER: 'user/register'
}

export const getAllUsers = () => {
    return instance.get(`/${END_POINT.USER}`)
}

export const login = (loginData: LoginCredentials) => {
    return instance.post(`/${END_POINT.AUTH_LOGIN}`, loginData)
}

export const register = (signUpData: SignUpCredentials) => {
    return instance.post(`/${END_POINT.AUTH_REGISTER}`, signUpData)
}

export const getUserByUsername = (username: string) => {
    return instance.get(`/${END_POINT.USER}/${username}`)
}