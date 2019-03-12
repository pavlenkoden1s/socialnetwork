import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { signUpAction, getSignUp } from '../store/signUp';
import { SignUp } from '../components/signUp';
import { AppState } from '../store/types';
import { getIsLoading } from '../store/signUp/reducer';

interface IStateToProps {
  isLoading: boolean;
}

interface IDispatchProps {
    onSignUp: (payload: {email: string, name: string, password: string}) => Dispatch<signUpAction>;
  }
  
  export interface ISignUpOwnProps {}

  type Props = IStateToProps  & ISignUpOwnProps & IDispatchProps

  const mapStateToProps = (state: AppState) => {
      return {
        isLoading: getIsLoading(state)
      }
  }

  const mapDispatchToProps = (dispatch: Dispatch<signUpAction>) => {
    return {
      onSignUp: (payload: {email: string, name: string, password: string}) => dispatch(getSignUp(payload))
    }
  };
  
  const SignUpContainer = connect<IStateToProps, IDispatchProps, null>(mapStateToProps as any, mapDispatchToProps)(SignUp);
  
  export { SignUpContainer as SignUp};