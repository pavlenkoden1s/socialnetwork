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
        case signUpActionType.SIGNUPDONE:
             payload = action.payload;
            return {...state, ...payload}
        case signUpActionType.WAITSIGNUP:
             payload = action.payload;
            return {...state, ...action.payload}
        default:
        return state;
    }
}

export const getIsLoading = (state: AppState): boolean => { return state.isLoading;}
