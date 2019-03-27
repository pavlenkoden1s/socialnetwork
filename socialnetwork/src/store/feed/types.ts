import { IAction } from '../../types/action'; 
import { Post } from '../../types/feed';

export enum getFeedActionType{
    GETFEED = "@feed/getfeed",
    LOADFEED = "@feed/loadingfeed",
    LOADFEEDDONE = "@feed/loadingfeeddone",
    LOADFEEDERROR = "@feed/getfeederror",
}

export interface IgetFeedState {
    message: string
    posts: Array<Post>
    isLoading: boolean
    token: string
    page: number
}

export type getFeedAction  = IAction<getFeedActionType, {[key: string]: any}>;