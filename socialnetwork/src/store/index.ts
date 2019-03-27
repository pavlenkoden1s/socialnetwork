import { combineReducers, Reducer } from 'redux';
import { AppState } from './types'
import signIn from './signIn'
import signUp from './signUp';
import addpost from './addPost';
import feed from './feed';


const reducer: Reducer  = combineReducers({
    signUp, 
    signIn, 
    addpost, 
    feed
});

export default reducer;
export * from './types';