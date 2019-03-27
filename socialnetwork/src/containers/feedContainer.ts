import { connect } from "react-redux";
import { AppState } from "../store";
import { getFeed, getFeedAction } from "../store/feed";
import { Feed } from "../components/feed";
import { Post } from "../types/feed";
import { Dispatch } from "redux";
import { getFeeds, getIsLoading, getToken, getPage } from "../store/feed/reducer";
interface IFeedDispatchProps {
    fetchPost: (page: number) => Dispatch<getFeedAction>
}
export interface IFeedOwnProps {}

export interface IFeedStateProps {
    posts: Array<Post>,
    isLoading: boolean,
    token: string,
    page: number
}

const mapStateToProps = (state: AppState): IFeedStateProps => {
    return {
      posts: getFeeds(state),
      isLoading: getIsLoading(state),
      token: getToken(state),
      page: getPage(state)
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<getFeedAction>): IFeedDispatchProps => {
    return {
      fetchPost: (page: number) => dispatch(getFeed(page))
    }
  };

// const FeedContainer = connect(mapStateToProps)(Feed);

const FeedContainer = connect<IFeedStateProps, IFeedDispatchProps, IFeedOwnProps >(mapStateToProps as any, mapDispatchToProps)(Feed)

export {FeedContainer as Feed}