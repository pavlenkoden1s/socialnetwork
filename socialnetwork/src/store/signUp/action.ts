
import { signUpActionType, signUpAction } from './types';
import { doSignUp } from '../../services/signUp';
import { Dispatch } from 'react';

const doSign = (payload: any) => ({
  type: signUpActionType.SIGNUP,
  payload
});

const waitSignUp = () => ({
  type: signUpActionType.WAITSIGNUP,
  payload: { isLoading: true }
});

const SignUpDone = () => ({
  type: signUpActionType.SIGNUPDONE,
  payload: { isLoading: false, isRegistered: true}
});

const SignUpError = () =>({
  type: signUpActionType.SIGNUPERROR,
  payload: {isLoading: false, isRegistered: false}
});

export const getSignUp = (payload: {email: string, name: string, password:string}):any =>  {
  return async (dispatch: Dispatch<signUpAction>) => {
    dispatch(waitSignUp());
    const response = await doSignUp(payload);
  if(response){
    const {token, userId} = response
    dispatch(doSign({token, userId}));
    dispatch(SignUpDone());
  } else {
    dispatch(SignUpError());
  }
  }
  //return dispatch(signinIn);
}