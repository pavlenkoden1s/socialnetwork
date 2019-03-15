import { connect } from "react-redux";
import { AppState } from "../store";
import { getFeed, IgetFeedState } from "../store/feed";
import { getFeeds } from "../store/feed/reducer";
import { Feed } from "../components/feed";
interface IStateToProps {

}

const mapStateToProps = (state: IgetFeedState)  => {
    return {
      images: getFeeds(state),
    //   isLoading: getIsLoading(state),
    };
  };

const FeedContainer = connect<IStateToProps,null,null>(mapStateToProps as any)(Feed)

export {FeedContainer as Feed}