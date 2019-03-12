import { IAction } from '../../types/action'; 
import { SignInResponse } from '../../services/signIn';

export enum signInActionType{
    SIGNIN = "Sign In",
    WAITSIGNIN = "Waiting signIn",
    SIGNINDONE = "Sign In done",
    SIGNINERROR = "Sign In Error"
}

export interface IsignInState {
    isRegistered: boolean
    token: string
    userId: string
    isLoading: boolean
}

export type signInAction  = IAction<signInActionType, {[key: string]: any}>;