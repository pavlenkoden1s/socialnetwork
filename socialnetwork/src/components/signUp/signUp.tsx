import React from 'react';
import { SignUpForm } from '../signUpform';

export interface IProps {
    onSignUp: (payload: {email: string, name: string, password: string}) => void;
    isLoading?: boolean;
}

export interface IState{

}

export const SignUp: React.FunctionComponent<IProps> = ({onSignUp, isLoading}) => {
    return <div className={'sign-up'}>
        <h1>Register</h1>
        { <SignUpForm className={'sign-up__form'} isLoading={isLoading} onSubmit={onSignUp} /> }
    </div>;
}

// export class SignUp extends React.PureComponent<IProps, IState>
// {
//     render()
//     {
//         const {isLoading, onSignUp} = this.props;
//         if (isLoading) {
//             return <h2>loading...</h2>
//           }
//         return <div className={'sign-up'}>
//         <h1>Register</h1>
        
//         { <SignUpForm className={'sign-up__form'} isLoading={isLoading} onSubmit={onSignUp} /> }
//         </div>;
//     }
// }

