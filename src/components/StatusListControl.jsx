import React from 'react';
import UserStatus from './UserStatus';
import StatusFeed from './StatusFeed';
import statusListData from './StatusData';


class StatusListControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      statusListData,
      likeButton: false
    };
    this.handleClickAddUserStatus = this.handleClickAddUserStatus.bind(this);
    this.handleLikeButton = this.handleLikeButton.bind(this);
    // console.log(statusListData);
    // console.log(this.state.statusListData);
  }
  handleClickAddUserStatus(newStatus){
    let newStatusListData = this.state.statusListData.slice();
    newStatusListData.unshift(newStatus);
    this.setState({statusListData: newStatusListData});
  }

  handleLikeButton() {
    console.log(this.state.likeButton);
    this.setState(prevState => ({likeButton: !prevState.likeButton}));
    console.log(this.state.likeButton);
  }


  render(){
    return(
      <div>
        <div className="statusFeed">
          <UserStatus
            onClickAddUserStatus = {this.handleClickAddUserStatus}/>

          {this.state.statusListData.map((newsFeed, index) =>
            <StatusFeed
              image={newsFeed.image}
              name={newsFeed.name}
              time={newsFeed.time}
              status={newsFeed.status}
              key={index}
              onLikeButton={this.handleLikeButton}
              likeStatus={this.state.likeButton}
              />
          )}

        </div>


        <style jsx>{`
          .statu6tt6t66
            padding: 4rem;
            border: 1px solid grey;
            padding: 1rem;
            margin: .7rem;
          }
        `}
        </style>
      </div>
    );
  }
}
export default StatusListControl;
