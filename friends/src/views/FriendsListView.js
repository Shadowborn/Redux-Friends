import React from "react";
import { connect } from "react-redux";
import { fetchMyFriends } from "../actions"

import { FriendsList } from "../components";
// import actions

class FriendsListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchMyFriends();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
    console.log('mapStateToProps', state)
    return {
      friends: state.reduceFriends.friends,
      fetching: state.reduceFriends.fetching,
      error: state.reduceFriends.error,
    }
  }
  
  export default connect(
    mapStateToProps /* mapStateToProps replaces null here */,
    {
      fetchMyFriends/* action creators go here */
    }
  )(FriendsListView);