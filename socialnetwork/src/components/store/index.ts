import { combineReducers, Reducer } from 'redux';
import { AppState } from './types'

const reducer: Reducer<AppState>  = combineReducers<AppState>({});

export default reducer;
export * from './types';