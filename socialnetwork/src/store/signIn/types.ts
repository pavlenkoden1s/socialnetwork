import { IAction } from '../../types/action'; 
import { AnyAction } from 'redux';

export enum signInActionType{
    SIGNIN = "Sign in"
}

export interface IsignInState {
    IsAuthorized: boolean
}

export type signInAction  = IAction<signInActionType, boolean>;