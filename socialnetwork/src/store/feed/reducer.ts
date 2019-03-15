import { getFeedAction, getFeedActionType, IgetFeedState } from './types'
import { AppState } from '../types';
import { Post } from '../../types/feed';

const INITIAL_STATE = {
    posts: [],
    isLoading: false,
    message: ""
}

export default function getFeedReducer (state: IgetFeedState = INITIAL_STATE, action: getFeedAction) {
    let payload=null;
    switch (action.type) {
        case getFeedActionType.GETFEED:
             payload = action.payload;
            return {...state, ...action.payload}
        case getFeedActionType.LOADFEEDDONE:
             payload = action.payload;
            return {...state, ...payload}
        case getFeedActionType.LOADFEED:
             payload = action.payload;
            return {...state, ...action.payload}
            case getFeedActionType.LOADFEEDERROR:
            payload = action.payload;
           return {...state, ...action.payload}
        default:
        return state;
    }
}

export const getFeeds = (state: IgetFeedState): Array<Post> => {
    return state.posts;
  };

export const getIsLoading = (state: AppState): boolean => { return state.isLoading;}