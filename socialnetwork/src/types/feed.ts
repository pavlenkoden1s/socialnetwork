export interface creator {
    "status": string,
    "posts": Array<string>,
    "_id": string,
    "email": string,
    "password": string,
    "name": string,
    "__v": number
}

export interface Post {
    "_id": string,
    "title": string,
    "content": string,
    "imageUrl": string,
    "creator": creator,
    "createdAt": string,
    "updatedAt": string,
    "__v": number
}