import { IAction } from '../../types/action'; 
import { SignUpResponse } from '../../services/signUp';

export enum signUpActionType{
    SIGNUP = "Sign up",
    WAITSIGNUP = "Waiting signUp",
    SIGNUPDONE = "Sign up done",
    SIGNUPERROR = "Sign up Error"
}

export interface IsignUpState {
    isRegistered: boolean
    token: string
    userId: string
}

export type signUpAction  = IAction<signUpActionType, {[key: string]: any}>;