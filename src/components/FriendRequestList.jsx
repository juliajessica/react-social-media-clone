import React from 'react';

function FriendRequestList(){
  return(
    <div>
      <div className="friendRequestList">

      </div>

      <FriendRequest />


      <style jsx>{`
        .friendRequestList {
          border 1px solid grey;
          padding: 1rem;
          margin: .7rem;
        }
      `}</style>
    </div>


  );
}

export default FriendRequestList;
