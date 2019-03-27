import { addPostAction, addPostActionType, IaddPostState } from './types'
import { AppState } from '../types';

const INITIAL_STATE = {
    isLoading: false,
    message: ""
}

export default function addPostReducer (state: IaddPostState = INITIAL_STATE, action: addPostAction) {
    let payload=null;
    switch (action.type) {
        case addPostActionType.ADDPOST:
             payload = action.payload;
            return {...state, ...action.payload}
        case addPostActionType.ADDPOSTDONE:
             payload = action.payload;
            return {...state, ...payload}
        case addPostActionType.WAITADDPOST:
             payload = action.payload;
            return {...state, ...action.payload}
        default:
        return state;
    }
}

export const getIsLoading = (state: AppState): boolean => { return state.feed.isLoading;}
