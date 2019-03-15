import React from 'react';

interface IProps {
    title: string,
    content: string,
    _id: string
}

export const FeedItem: React.FunctionComponent<IProps> = ({title, content, _id}) => {
    return <div className='feedItem' id={_id}>
        <h2>{title}</h2>
        <div className='feedItem__content'>{content}</div>
    </div>;
}