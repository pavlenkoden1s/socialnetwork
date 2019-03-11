import React, {InputHTMLAttributes} from 'react';
import classnames from "classnames";

import "./field.scss";

export enum InputTypes{
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email'
}

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputTypes,
    classNames?: string
}

export class Field extends React.PureComponent<IProps> {
    render() {
        const {type, classNames, ...otherProps} = this.props;
        return <div className={'field'}>
        <input  type={type} 
        {...otherProps}
        className={classnames('field__input', classNames)}
        />
        </div>
        
    }
}