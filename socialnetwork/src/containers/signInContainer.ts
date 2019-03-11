import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { signInAction } from '../store/signIn';
import { SignIn } from '../components/signIn';


interface IDispatchProps {
    // onSubmit: (value: string) => Dispatch<ImagesAction>;
  }
  
  const mapDispatchToProps = (dispatch: Dispatch<signInAction>) => {
    return {
    //   onSubmit: (value: string) => dispatch(getItems({value, page: 1}))
    }
  };
  
  const SignInContainer = connect<null, IDispatchProps, null>(null, mapDispatchToProps)(SignIn);
  
  export { SignInContainer as SignIn};