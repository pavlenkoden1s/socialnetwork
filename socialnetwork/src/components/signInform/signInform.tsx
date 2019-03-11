import React from 'react';
import classnames from 'classnames';
import { Field, InputTypes } from '../field';

export interface IProps {
    className?: string;
    title?: string;
    //onSubmit: (v: string) => void
}

export class SignInForm extends React.PureComponent<IProps>{
    render(){
        const {...props} = this.props;
        return <div><h1>{props.title}</h1><form>
            <Field 
            type={InputTypes.TEXT} placeholder={'email'}
            />
            <Field 
            type={InputTypes.PASSWORD} placeholder={'password'}
            />
            <button type={'submit'}>Enter</button>
            
        </form></div>
    } 
}