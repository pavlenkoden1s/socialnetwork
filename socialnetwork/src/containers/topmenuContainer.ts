import { connect } from 'react-redux';

import { Topmenu } from '../components/topmenu/topmenu';
import { Dispatch } from 'redux';
import { signInAction } from '../store/signIn';

interface IDispatchProps {
  // onSearch: (value: string) => Dispatch<signInAction>;
}

const mapDispatchToProps = (dispatch: Dispatch<signInAction>) => {
  return {
    // onSearch: (value: string) => dispatch(getItems({value, page: 1}))
  }
};

const TopmenuContainer = connect<null, IDispatchProps, null>(null, mapDispatchToProps)(Topmenu);

export { TopmenuContainer as Topmenu};
