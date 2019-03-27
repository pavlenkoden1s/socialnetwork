import React, { SyntheticEvent } from 'react';
import { InputTypes, Field } from '../field';

interface IProps {
    className?: string;
    title?: string;
    isLoading?: boolean;
    isRegistered?: boolean;
    onSubmit: (payload: {email: string, password: string}) => void
}

interface IState {
    email:string;
    password: string;
}

export class SignInForm extends React.PureComponent<IProps, IState>{
    public state = {
        email: 'abc@pat.ru',
        password: 'qwerty'
    };
    private handleChange = (e: SyntheticEvent<HTMLInputElement>) => {

        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
            this.setState({ email: value });
                break;
            case 'password':
            this.setState({ password: value });
                break;
            default:
                break;
        }
    }
    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {email, password} = this.state;
        this.props.onSubmit({email,password});
    };
    render(){
        const {isLoading, isRegistered} = this.props; 
        if (isLoading) {
            return <h2>loading...</h2>
          }
        
        if (isRegistered) {
            return <h2>Successfully registered!</h2>
          }
        return <form onSubmit={this.onSubmit}>
            <Field 
            type={InputTypes.EMAIL} 
            placeholder={'email'} 
            name={'email'}
            value={this.state.email}
            onChange={this.handleChange}
            />
            <Field 
            type={InputTypes.PASSWORD} 
            name={'password'}
            placeholder={'password'}
            onChange={this.handleChange}
            value={this.state.password}
            />
            <button type={'submit'}>Submit</button>
            
        </form>
    }
}