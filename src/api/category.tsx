

import { CategoryType } from '../types/category';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const user = isAuthenticate();
console.log(user);

export const listCategory = () => {
    const url = `/categorys`;
    return instance.get(url);
};
export const readCategory = (_id: number | string) => {
    const url = `/categorys/${_id}`;
    return instance.get(url);
};
export const addCategory = (product: CategoryType) => {
    const url = `/categorys/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const removeCategory = (id: number | string) => {
    const url = `/categorys/${user?.user._id}/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const updateCategory = (product: CategoryType) => {
    const url = `/categorys/${user?.user._id}/${product._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};