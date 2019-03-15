import React, { SyntheticEvent } from 'react';
import { InputTypes, Field } from '../field';

interface IProps {
    className?: string;
    title?: string;
    isLoading?: boolean;
    onSubmit: (payload: {title: string, content: string}) => void
}

interface IState {
    title: string;
    content:string;
}

export class AddPostForm extends React.PureComponent<IProps, IState>{
    public state = {
        title: 'title',
        content: 'content'
    };
    private handleChange = (e: SyntheticEvent<HTMLInputElement>) => {

        const { name, value } = e.currentTarget;
        switch (name) {
            case 'title':
            this.setState({ title: value });
                break;
            case 'content':
            this.setState({ content: value });
                break;
            default:
                break;
        }
    }
    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {title, content} = this.state;
        this.props.onSubmit({title, content});
    };
    render(){
        const {isLoading} = this.props; 
        if (isLoading) {
            return <h2>loading...</h2>
          }
        return <form onSubmit={this.onSubmit}>
            <Field 
            type={InputTypes.TEXT} 
            name={'title'}
            onChange={this.handleChange}
            placeholder={'title'}
            value={this.state.title}
            />
            <Field 
            type={InputTypes.TEXT} 
            name={'content'}
            placeholder={'post content'}
            onChange={this.handleChange}
            value={this.state.content}
            />
            <button type={'submit'}>Post</button>
            
        </form>
    }
}