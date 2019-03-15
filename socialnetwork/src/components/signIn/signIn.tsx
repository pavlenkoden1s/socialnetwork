import React from 'react';
import { SignInForm } from '../signInform';

export interface IProps {
    onSignIn: (payload: {email: string, password: string}) => void;
    isLoading?: boolean;
}

export interface IState{

}

export const SignIn: React.FunctionComponent<IProps> = ({onSignIn, isLoading}) => {
    return <div className={'sign-up'}>
        <h1>Sign in</h1>
        { <SignInForm className={'sign-in__form'} isLoading={isLoading} onSubmit={onSignIn} /> }
    </div>;
}
