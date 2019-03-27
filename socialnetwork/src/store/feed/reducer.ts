import { getFeedAction, getFeedActionType, IgetFeedState } from './types'
import { AppState } from '../types';
import { Post } from '../../types/feed';

const INITIAL_STATE = {
    posts: [],
    isLoading: false,
    message: "",
    token: "",
    page: 1
}

export default function getFeedReducer (state: IgetFeedState = INITIAL_STATE, action: getFeedAction) {
    switch (action.type) {
        case getFeedActionType.GETFEED:
            return {...state, ...action.payload}
        case getFeedActionType.LOADFEEDDONE:
            return {...state, ...action.payload}
        case getFeedActionType.LOADFEED:
            // console.log(state.posts);
            // console.log(action.payload!.posts);
             state.posts.push(action.payload!.posts)
            return {...state, ...action.payload}
            case getFeedActionType.LOADFEEDERROR:
           return {...state, ...action.payload}
        default:
        return state;
    }
}

export const getFeeds = (state: AppState): Array<Post> => {
    return state.feed.posts;
  };

export const getIsLoading = (state: AppState): boolean => { return state.feed.isLoading;}
export const getToken = (state: AppState): string => { return state.feed.token;}
export const getPage = (state: AppState): number => { return state.feed.page;}