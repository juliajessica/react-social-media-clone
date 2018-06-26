import React from 'react';
import FriendRequest from './FriendRequest';

let friendRequestData = [
  {
    image: 'https://png.icons8.com/color/1600/person-female.png',
    name: 'Brenda Franco'
  },
  {
    image: 'https://png.icons8.com/color/1600/circled-user-female-skin-type-6.png',
    name: 'Susie Johnson'
  },
  {
    image: 'https://png.icons8.com/color/1600/circled-user-male-skin-type-5.png',
    name: 'Kingsley Peters'
  }
];

function FriendRequestList(){
  return(
    <div className="friendRequestList">
      <h3>Friend Requests</h3>
      <br/>
      <br/>
      {friendRequestData.map((request, index) =>
        <FriendRequest
          image={request.image}
          name={request.name}
          key={index}/>
      )}


      <style jsx>{`
        .friendRequestList {
          border: 1px solid grey;
          padding: 2rem;
          margin: .7rem;
          display: flex;
          flex: wrap;
        }
      `}</style>
    </div>
  );
}

export default FriendRequestList;
