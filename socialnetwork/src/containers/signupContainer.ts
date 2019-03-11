import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { signUpAction, getSignUp } from '../store/signUp';
import { SignUp } from '../components/signUp';


interface IDispatchProps {
    onSignUp: (payload: {email: string, name: string, password: string}) => Dispatch<signUpAction>;
  }
  
  const mapDispatchToProps = (dispatch: Dispatch<signUpAction>) => {
    return {
      onSignUp: (payload: {email: string, name: string, password: string}) => dispatch(getSignUp(payload))
    }
  };
  
  const SignUpContainer = connect<null, IDispatchProps, null>(null, mapDispatchToProps)(SignUp);
  
  export { SignUpContainer as SignUp};