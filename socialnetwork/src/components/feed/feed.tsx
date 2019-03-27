import React from 'react';
import { Post } from '../../types/feed';
import { FeedItem } from '../feedItem';

export interface IFeedProps {
    posts: Array<Post>,
    isLoading: boolean,
    fetchPost(page: number): void,
    page: number
}

export class Feed extends React.PureComponent<IFeedProps>  {

    componentDidMount(): void {
        this.loadFeed(this.props.page);
        // this.props.fetchPost();
    }
    private loadFeed = (e: any) => {
        this.props.fetchPost(this.props.page);
        // const page = this.state.page++;
        // this.setState(state => ({...state, page}))
    };
    render() {
        const {posts, isLoading} = this.props;
        if (isLoading) {
            return <h2>loading...</h2>
          }
        return <div className='feed'>
        <h1>Feed</h1>
        {
            posts.map((post, i) =>{
                return <FeedItem {...post} 
                 />
            })
        }
        <button onClick={this.loadFeed}>Load more</button>
        </div>;
    }
}