import { signInAction, signInActionType, IsignInState } from './types'

const INITIAL_STATE = {
    IsAuthorized: false
}

export default function signInReducer (state: IsignInState = INITIAL_STATE, action: signInAction) {
    if(action.type===signInActionType.SIGNIN){
        const payload = action.payload;
        return {...state, payload}
    } else {
        return state;
    }
}