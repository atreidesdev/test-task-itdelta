import {apiBase} from "../apiBase.ts";

export const getImages = async () => {
    const respone = await apiBase.get('images')
    return respone.data
}