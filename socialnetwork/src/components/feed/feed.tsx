import React from 'react';
import { Post } from '../../types/feed';
import { FeedItem } from '../feedItem';

interface IProps {
    posts: Array<Post>,
    isLoading: boolean
}

export class Feed extends React.PureComponent<IProps>  {
    render() {
        const {posts, isLoading} = this.props;
        if (isLoading) {
            return <h2>loading...</h2>
          }
        return <div className='feed'>
        <h1>Feed</h1>
        {
            posts.map((post, i) =>{
                <FeedItem {...post} />
            })
        }
        </div>;
    }
}