import {apiBase} from "../apiBase.ts";

export const getImageById = async (imageId: number) => {
    const response = await apiBase.get('image/' + imageId)
    return response.data
}