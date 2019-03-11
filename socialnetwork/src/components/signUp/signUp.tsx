import React from 'react';
import { SignUpForm } from '../signUpform';

export interface IProps {
    onSignUp: (payload: {email: string, name: string, password: string}) => void;
}

export const SignUp: React.FunctionComponent<IProps> = ({onSignUp}) => {
    return <div className={'sign-up'}>
        <h1>Register</h1>
        { <SignUpForm className={'sign-up__form'} onSubmit={onSignUp} /> }
    </div>;
}