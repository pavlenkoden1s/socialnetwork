import { combineReducers, Reducer } from 'redux';
import { AppState } from './types'
import signInReducer from './signIn'
import signUpReducer from './signUp';


const reducer: Reducer  = combineReducers({signUpReducer
});

export default reducer;
export * from './types';