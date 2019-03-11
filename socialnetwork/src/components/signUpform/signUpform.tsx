import React, { SyntheticEvent } from 'react';
import { InputTypes, Field } from '../field';

interface IProps {
    className?: string;
    title?: string;
    onSubmit: (payload: {email: string, name: string, password: string}) => void
}

interface IState {
    name: string;
    email:string;
    password: string;
}

export class SignUpForm extends React.PureComponent<IProps, IState>{
    public state = {
        name: 'username1',
        email: 'rr@tt.rr',
        password: 'qwerty'
    };
    private handleChange = (e: SyntheticEvent<HTMLInputElement>) => {

        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
            this.setState({ email: value });
                break;
            case 'name':
            this.setState({ name: value });
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
        const {email, name, password} = this.state;
        this.props.onSubmit({email,name,password});
        // const resp = signUp(this.state);
        // console.log(resp);
        // this.props.onSubmit(this.state.email, this.state.name, this.state.password);
    };

    render(){
        // const { name, email, password } = this.state;
        // console.log(name);
        
        // const { username, password, submitted } = this.state;
        return <form onSubmit={this.onSubmit}>
            <Field 
            type={InputTypes.EMAIL} 
            placeholder={'email'} 
            name={'email'}
            value={this.state.email}
            onChange={this.handleChange}
            />
            <Field 
            type={InputTypes.TEXT} 
            name={'name'}
            onChange={this.handleChange}
            placeholder={'name'}
            value={this.state.name}
            />
            <Field 
            type={InputTypes.PASSWORD} 
            name={'password'}
            placeholder={'password'}
            onChange={this.handleChange}
            value={this.state.password}
            />
            <button type={'submit'}>Register</button>
            
        </form>
    }
}