import API from './api'

export const registerUser = async (data: {
    name: string,
    email: string,
    password: string,
}) => {
    const response = await API.post('/api/auth/register', data)
    return response.data
}

export const loginUser = async (data: {
    email: string,
    password: string
}) => {
    const response = await API.post('/api/auth/login', data)
    return response.data
}

export const getUserProfile = async () => {
    const response = await API.get('/api/auth/profile')
    return response.data
}
