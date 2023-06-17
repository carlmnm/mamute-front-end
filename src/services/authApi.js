import api from './api'

export async function login(email, password) {
    const response = await api.post('/auth/sign-in', { email, password})
    return response.data
}