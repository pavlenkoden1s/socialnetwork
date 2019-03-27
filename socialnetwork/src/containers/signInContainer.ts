import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { signInAction, getSignIn } from '../store/signIn';
import { SignIn } from '../components/signIn';
import { AppState } from '../store/types';
import { getIsLoading, getIsRegistered } from '../store/signIn/reducer';

interface IStateToProps {
  isLoading: boolean;
  isRegistered: boolean;
}

interface IDispatchProps {
    onSignIn: (payload: {email: string, password: string}) => Dispatch<signInAction>;
  }
  
  export interface ISignInOwnProps {}

  type Props = IStateToProps  & ISignInOwnProps & IDispatchProps

  const mapStateToProps = (state: AppState) => {
      return {
        isLoading: getIsLoading(state),
        isRegistered: getIsRegistered(state)
      }
  }

  const mapDispatchToProps = (dispatch: Dispatch<signInAction>) => {
    return {
      onSignIn: (payload: {email: string, password: string}) => dispatch(getSignIn(payload))
    }
  };
  
  const SignInContainer = connect<IStateToProps, IDispatchProps, null>(mapStateToProps as any, mapDispatchToProps)(SignIn);
  
  export { SignInContainer as SignIn};