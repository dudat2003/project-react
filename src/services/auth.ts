import { IUser } from '@/common/type'
import instance from '@/core/api'

export const signup = async (users: IUser) => {
    try {
        const response = await instance.post(`/users`, users)
        return response.data
    } catch (error) {
        console.log('SIGNUP_ERROR', error)
    }
}
export const login = async (users: IUser) => {
    try {
        const response = await instance.post(`/users`, users)
        return response.data
    } catch (error) {
        console.log('LOGIN', error)
    }
}
