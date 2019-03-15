import defconfig from "../config";

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

    const res = await fetch(`${defconfig.baseUrl}/auth/login`, requestOptions)
    const data = await res.json() as SignInResponse;
    console.log(data);
    return data;
}
export default doSignIn