import defconfig from "../config";
import { Post } from "../types/feed";

export interface FeedResponse {
    message: string;
    posts: Array<Post>
}

export const doLoadFeed = async (page: number): Promise<FeedResponse> => {
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'GET',
        headers: {  'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`},
                    //body: JSON.stringify(page)
    };
    const res = await fetch(`${defconfig.baseUrl}/feed/posts?page=${page}`, requestOptions)
    const data = await res.json() as FeedResponse;
    console.log(data);
    return data;
  }
  export default doLoadFeed