import { LoginCredentials } from "@type/LoginCredentials"
import instance from "./_axios_instance"

const END_POINT = {
    USER: 'user',
    AUTH_LOGIN: 'user/login'
}

export const getAllUsers = () => {
    return instance.get(`/${END_POINT.USER}`)
}

export const login = (loginData: LoginCredentials) => {
    return instance.post(`/${END_POINT.AUTH_LOGIN}`, loginData)
}