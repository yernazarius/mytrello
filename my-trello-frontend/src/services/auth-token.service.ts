import Cookies from 'js-cookie'

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        sameSite: 'none',
        domain: 'mytrello-frontend-bz5t.onrender.com',
        secure: true,
        expires: 1
    });
}

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
}