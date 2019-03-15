
import { addPostActionType, addPostAction } from './types';
import { doAddPost } from '../../services/addPost';
import { Dispatch } from 'react';

const AddPost = (payload: any) => ({
  type: addPostActionType.ADDPOST,
  payload
});

const waitaddpost = () => ({
  type: addPostActionType.WAITADDPOST,
  payload: { isLoading: true }
});

const ADDPOSTDONE = () => ({
  type: addPostActionType.ADDPOSTDONE,
  payload: { isLoading: false, isRegistered: true}
});

const AddPostError = () =>({
  type: addPostActionType.ADDPOSTERROR,
  payload: {isLoading: false, isRegistered: false}
});

export const getAddPost = (payload: {title: string, content:string}):any =>  {
  return async (dispatch: Dispatch<addPostAction>) => {
    dispatch(waitaddpost());
    const response = await doAddPost(payload);
  if(response){
    const { message} = response
    dispatch(AddPost({message}));
    dispatch(ADDPOSTDONE());
  } else {
    dispatch(AddPostError());
  }
  }
  //return dispatch(signinIn);
}