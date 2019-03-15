import { combineReducers, Reducer } from 'redux';
import { AppState } from './types'
import signInReducer from './signIn'
import signUpReducer from './signUp';
import addPostReducer from './addPost';
import getFeedReducer from './feed';


const reducer: Reducer  = combineReducers({signUpReducer, signInReducer, addPostReducer, getFeedReducer
});

export default reducer;
export * from './types';