import defconfig from "../config";
import { Post } from "../types/feed";

export interface FeedResponse {
    message: string;
    posts: Array<Post>
}

export const doLoadFeed = async (payload: {title: string, content: string}): Promise<FeedResponse> => {
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'POST',
        headers: {  'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`},
                    body: JSON.stringify(payload)
    };
    const res = await fetch(`${defconfig.baseUrl}/feed/posts`, requestOptions)
    const data = await res.json() as FeedResponse;
    console.log(data);
    return data;
  }
  export default doLoadFeed