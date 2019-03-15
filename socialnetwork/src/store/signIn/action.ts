
import { signInActionType, signInAction } from './types';
import { doSignIn } from '../../services/signIn';
import { Dispatch } from 'react';

const doSign = (payload: any) => ({
  type: signInActionType.SIGNIN,
  payload
});

const waitSignIn = () => ({
  type: signInActionType.WAITSIGNIN,
  payload: { isLoading: true }
});

const SignInDone = () => ({
  type: signInActionType.SIGNINDONE,
  payload: { isLoading: false, isRegistered: true}
});

const SignInError = () =>({
  type: signInActionType.SIGNINERROR,
  payload: {isLoading: false, isRegistered: false}
});

export const getSignIn = (payload: {email: string, password:string}):any =>  {
  return async (dispatch: Dispatch<signInAction>) => {
    dispatch(waitSignIn());
    const response = await doSignIn(payload);
  if(response){
    const {token, userId} = response
    localStorage.setItem("token", token);
    console.log('log='+localStorage.getItem('token'));
    dispatch(doSign({token, userId}));
    dispatch(SignInDone());
  } else {
    dispatch(SignInError());
  }
  }
  //return dispatch(signinIn);
}