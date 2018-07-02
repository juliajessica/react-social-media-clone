import React from 'react';
import UserStatus from './UserStatus';
import StatusFeed from './StatusFeed';
import statusListData from './StatusData';


class StatusListControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      statusListData
    };
    this.handleClickAddUserStatus = this.handleClickAddUserStatus.bind(this);
    console.log(statusListData);
    console.log(this.state.statusListData);
  }
  handleClickAddUserStatus(newStatus){
    let newStatusListData = this.state.statusListData.slice();
    newStatusListData.unshift(newStatus);
    this.setState({statusListData: newStatusListData});
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
              key={index} />
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
