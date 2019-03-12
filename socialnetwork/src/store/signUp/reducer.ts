import { signUpAction, signUpActionType, IsignUpState } from './types'
import { AppState } from '../types';

const INITIAL_STATE = {
    isRegistered: false,
    isLoading: false,
    token: "",
    userId: ""
}

export default function signUpReducer (state: IsignUpState = INITIAL_STATE, action: signUpAction) {
    let payload=null;
    switch (action.type) {
        case signUpActionType.SIGNUP:
             payload = action.payload;
            return {...state, ...action.payload}
            break;
        case signUpActionType.SIGNUPDONE:
             payload = action.payload;
            return {...state, ...payload}
        case signUpActionType.WAITSIGNUP:
             payload = action.payload;
            return {...state, ...action.payload}
        default:
        return state;
            break;
    }
}

export const getIsLoading = (state: AppState): boolean => { console.log(state.isLoading);
 return state.isLoading;}
