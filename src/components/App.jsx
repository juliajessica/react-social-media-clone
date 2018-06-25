import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import StatusList from './StatusList';
import FriendRequestList from './FriendRequestList';

function App(){
  return (
    <div>
      <Nav />
      <div className="app">
        <Profile />
        <StatusList />
        <FriendRequestList />

        <style jsx global>{`
          .app {
            margin: auto;
            display: block;
            display:flex;
            flex-direction:wrap;
          }
        `}</style>
      </div>
    </div>


  );
}

export default App;
