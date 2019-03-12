import { signInAction, signInActionType, IsignInState } from './types'
import { AppState } from '../types';

const INITIAL_STATE = {
    isRegistered: false,
    isLoading: false,
    token: "",
    userId: ""
}

export default function signInReducer (state: IsignInState = INITIAL_STATE, action: signInAction) {
    let payload=null;
    switch (action.type) {
        case signInActionType.SIGNIN:
             payload = action.payload;
            return {...state, ...action.payload}
            break;
        case signInActionType.SIGNINDONE:
             payload = action.payload;
            return {...state, ...payload}
        case signInActionType.WAITSIGNIN:
             payload = action.payload;
            return {...state, ...action.payload}
        default:
        return state;
            break;
    }
}

export const getIsLoading = (state: AppState): boolean => { console.log(state.isLoading);
 return state.isLoading;}
