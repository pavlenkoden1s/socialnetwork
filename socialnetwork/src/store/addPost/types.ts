import { IAction } from '../../types/action'; 

export enum addPostActionType{
    ADDPOST = "add post",
    WAITADDPOST = "adding post",
    ADDPOSTDONE = "add post done",
    ADDPOSTERROR = "add post error",
}

export interface IaddPostState {
    message: string
    isLoading: boolean
}

export type addPostAction  = IAction<addPostActionType, {[key: string]: any}>;