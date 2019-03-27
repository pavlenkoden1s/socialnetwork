import { IsignInState } from "./signIn";
import { IgetFeedState } from "./feed";
import { IsignUpState } from "./signUp";
import { IaddPostState } from "./addPost";

export interface AppState{
    signUp: IsignUpState
    signIn: IsignInState
    addPost: IaddPostState
    feed: IgetFeedState
}