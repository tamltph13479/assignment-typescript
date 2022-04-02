import instance from "./instance";

export const signup = (user: { name: string; email: string; password: string | number; }) => {
    const url = `/signup`;
    return instance.post(url, user)
}
export const signin = (user: { email: string; password: string | number; }) => {
    const url = `/signin`;
    return instance.post(url, user)
}