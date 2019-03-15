import { connect } from "react-redux";
import { AppState } from "../store";
import { getFeed, IgetFeedState } from "../store/feed";
import { getFeeds } from "../store/feed/reducer";
import { Feed } from "../components/feed";
import { Post } from "../types/feed";
interface IFeedStateProps {
    posts: Array<Post>
}
export interface IFeedOwnProps {}

export interface IFeedDispatchProps {}

type Props = IFeedStateProps & IFeedDispatchProps & IFeedOwnProps
const mapStateToProps = (state: IgetFeedState): Props  => {
    return {
      posts: getFeeds(state),
    //   isLoading: getIsLoading(state),
    };
  };

const FeedContainer = connect<IFeedStateProps, IFeedDispatchProps, IFeedOwnProps >(mapStateToProps as any)(Feed)

export {FeedContainer as Feed}