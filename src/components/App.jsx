import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import StatusList from './StatusList';
import FriendRequestList from './FriendRequest';

function App(){
  return (
    <div>
      <Nav />
      <Profile />
      <StatusList />
      <FriendRequestList />
    </div>
  );
}

export default App;
