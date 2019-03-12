
export interface SignInResponse {
    token: string;
    userId: string;
  }
  
  export const doSignIn = async (payload: {email: string, password: string}): Promise<SignInResponse> => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    const res = await fetch(`https://rest-node-course-api.herokuapp.com/auth/login`, requestOptions)
    const data = await res.json() as SignInResponse;
    console.log(data);
    return data;
    // const {token, userId} = data;
    // console.log('resp');
    // console.log(data);
    // return {token, userId}
}
export default doSignIn