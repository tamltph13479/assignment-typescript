import { ProductType } from '../types/Product';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const user = isAuthenticate();
console.log(user);

export const listbanner = () => {
    const url = `/banners`;
    return instance.get(url);
};
export const readbanner = (_id: number | string) => {
    const url = `/banners/${_id}`;
    return instance.get(url);
};
export const addbanner = (product: ProductType) => {
    const url = `/banners/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const removebanner = (id: number | string) => {
    const url = `/banners/${user?.user._id}/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const updatebanner = (product: ProductType) => {
    const url = `/banners/${user?.user._id}/${product._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};