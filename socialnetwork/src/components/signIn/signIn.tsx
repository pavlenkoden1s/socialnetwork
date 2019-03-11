import React from "react";
import { SignInForm } from '../signInform';

export interface IProps{
    // onSubmit: (v:string) => void;
}

export const SignIn: React.FunctionComponent<IProps> = () => {
    return <div className={'sign-in'}>
        <h1>Sign in</h1>
        <SignInForm className={'sign-in__form'} />
    </div>;
}