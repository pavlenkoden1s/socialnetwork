import { Dispatch } from 'redux';
import { signInActionType, signInAction } from './types';
import { IAction } from '../../types/action';

export const getSignIn: () => IAction<signInActionType, string> = () =>  {
    return {
        type: signInActionType.SIGNIN,
        payload: 'Hello'
    }
  //return dispatch(signinIn);
}