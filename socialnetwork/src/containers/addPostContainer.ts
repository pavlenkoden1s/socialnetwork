import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addPostAction, getAddPost} from '../store/addPost';
import { AddPost } from '../components/addPost';
import { AppState } from '../store/types';
import { getIsLoading } from '../store/addPost/reducer';

interface IStateToProps {
  isLoading: boolean;
}

interface IDispatchProps {
    onAddPost: (payload: {title: string, content: string}) => Dispatch<addPostAction>;
  }
  
  export interface IaddPostOwnProps {}

  type Props = IStateToProps  & IaddPostOwnProps & IDispatchProps

  const mapStateToProps = (state: AppState) => {
      return {
        // isLoading: getIsLoading(state)
      }
  }

  const mapDispatchToProps = (dispatch: Dispatch<addPostAction>) => {
    return {
      onAddPost: (payload: {title: string, content: string}) => dispatch(getAddPost(payload))
    }
  };
  
  const addPostContainer = connect<IStateToProps, IDispatchProps, null>(mapStateToProps as any, mapDispatchToProps)(AddPost);
  
  export { addPostContainer as AddPost};