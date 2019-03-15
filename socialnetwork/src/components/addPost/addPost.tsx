import React from 'react';
import { AddPostForm } from '../addPostFrom';

export interface IProps {
    onAddPost: (payload: {title: string, content: string}) => void;
    isLoading?: boolean;
}

export interface IState{

}

export const AddPost: React.FunctionComponent<IProps> = ({onAddPost, isLoading}) => {
    return <div className={'sign-up'}>
        <h1>Add Post</h1>
        { <AddPostForm className={'sign-up__form'} isLoading={isLoading} onSubmit={onAddPost} /> }
    </div>;
}

// export class AddPost extends React.PureComponent<IProps, IState>
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

