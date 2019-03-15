import { Dispatch } from 'react';
import { getFeedAction, getFeedActionType } from './types';
import { doAddPost } from '../../services/addPost';

const LoadFeed = (payload: any) => ({
    type: getFeedActionType.LOADFEED,
    payload
  });
  
  const waitLoadFeed = () => ({
    type: getFeedActionType.LOADFEED,
    payload: { isLoading: true }
  });
  
  const loadFeedDone = () => ({
    type: getFeedActionType.LOADFEEDDONE,
    payload: { isLoading: false, isRegistered: true}
  });
  
  const loadFeedError = () =>({
    type: getFeedActionType.LOADFEEDERROR,
    payload: {isLoading: false, isRegistered: false}
  });

export const getFeed = (payload: {title: string, content:string}):any =>  {
    return async (dispatch: Dispatch<getFeedAction>) => {
      dispatch(waitLoadFeed());
      const response = await doAddPost(payload);
    if(response){
      const { message} = response
      dispatch(LoadFeed({message}));
      dispatch(loadFeedDone());
    } else {
      dispatch(loadFeedError());
    }
    }
  }