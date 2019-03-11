import axios from 'axios';
import { signUpResponse } from '../types/API';
export interface SignUpResponse {
    token: string;
    userId: string;
  }
  
  export const doSignUp = async (payload:  {email: string, name: string, password: string}): Promise<SignUpResponse> => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    const res = await fetch(`https://rest-node-course-api.herokuapp.com/auth/signup`, requestOptions)
    const data = await res.json() as SignUpResponse;
    console.log(data);
    return data;
    // const {token, userId} = data;
    // console.log('resp');
    // console.log(data);
    // return {token, userId}
}
export default doSignUp