import { Dispatch } from 'react';
import { getFeedAction, getFeedActionType } from './types';
import { doLoadFeed } from '../../services/feed';
import { Post } from '../../types/feed';

interface ILoadFeed {
  message: string,
  posts: Array<Post>
}

const LoadFeed = (payload: ILoadFeed) => ({
    type: getFeedActionType.GETFEED,
    payload
  });
  
  const waitLoadFeed = () => ({
    type: getFeedActionType.LOADFEED,
    payload: { isLoading: true }
  });
  
  const loadFeedDone = (pageNext: number) => ({
    type: getFeedActionType.LOADFEEDDONE,
    payload: { isLoading: false, isRegistered: true, page: pageNext}
  });
  
  const loadFeedError = () =>({
    type: getFeedActionType.LOADFEEDERROR,
    payload: {isLoading: false, isRegistered: false}
  });

export const getFeed = (page: number):any =>  {
    return async (dispatch: Dispatch<getFeedAction>) => {
      dispatch(waitLoadFeed());
      const response = await doLoadFeed(page);
    if(response){
      const { message, posts} = response
      dispatch(LoadFeed({message, posts}));
      dispatch(loadFeedDone(page+1));
    } else {
      dispatch(loadFeedError());
    }
    }
  }