
import defconfig from '../config';
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

    const res = await fetch(`${defconfig.baseUrl}/auth/signup`, requestOptions)
    const data = await res.json() as SignUpResponse;
    console.log(data);
    return data;
}
export default doSignUp