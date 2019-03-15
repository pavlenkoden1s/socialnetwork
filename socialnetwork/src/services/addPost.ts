import defconfig from "../config";

export interface post {
    _id: string;
    title: string;
    content: string;
    imageUrl: string;
    creator: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface creator {
    _id: string;
    name: string;
}

export interface addPost {
    message: string;
    post: post;
    creator: creator;
  }
  
export const doAddPost = async (payload: {title: string, content: string}): Promise<addPost> => {
  const token = localStorage.getItem('token');
  const requestOptions = {
      method: 'POST',
      headers: {  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`},
                  body: JSON.stringify(payload)
  };

  const res = await fetch(`${defconfig.baseUrl}/feed/post`, requestOptions)
  const data = await res.json() as addPost;
  console.log(data);
  return data;
}
export default doAddPost