export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string);
}
import { UserType } from "../types/user";
export const addLocalstorage = (user: UserType, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
