import {apiBase} from "../apiBase.ts";


export const postComment = async (imageId: number, comment: string) => {
    const response = await apiBase.post(`image/${imageId}/comments`, {'comment': comment});
    return response.status
}