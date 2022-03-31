


import { PostType } from '../types/Post';
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const user = isAuthenticate();
console.log(user);

export const listPost = () => {
    const url = `/posts`;
    return instance.get(url);
};
export const readPost = (_id: number | string) => {
    const url = `/posts/${_id}`;
    return instance.get(url);
};
export const addPost = (post: PostType) => {
    const url = `/posts/${user?.user._id}`;
    return instance.post(url, post, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const removePost = (id: number | string) => {
    const url = `/posts/${user?.user._id}/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const updatePost = (post: PostType) => {
    const url = `/posts/${user?.user._id}/${post._id}`;
    return instance.put(url, post, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};