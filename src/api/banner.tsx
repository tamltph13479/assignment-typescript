
import { BannerType } from '../types/banner';
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
export const addbanner = (banner: BannerType) => {
    const url = `/banners/${user?.user._id}`;
    return instance.post(url, banner, {
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
export const updatebanner = (banner: BannerType) => {
    const url = `/banners/${user?.user._id}/${banner._id}`;
    return instance.put(url, banner, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};