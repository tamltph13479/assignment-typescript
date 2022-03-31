
import { UserType } from '../types/user';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const user = isAuthenticate();
console.log(user);

export const listusers = () => {
    const url = `/users`;
    return instance.get(url);
};
export const readusers = (_id: number | string) => {
    const url = `/users/${_id}`;
    return instance.get(url);
};
export const addusers = (product: UserType) => {
    const url = `/users/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const removeusers = (id: number | string) => {
    const url = `/users/${user?.user._id}/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const updateusers = (product: UserType) => {
    const url = `/users/${user?.user._id}/${product._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};