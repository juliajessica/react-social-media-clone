import React from 'react';
import PropTypes from 'prop-types';

function FriendRequest(props){
  return(
    <div>
      <div className="friendRequestStyle">
        <img src={props.image} />
        <h4>{props.name}</h4>
        <button>ADD ME</button>

        <style jsx>{`
          .friendRequestStyle {
            display: flex;
            flex-direction: wrap;
            justify-content: space-around;
          }
          h4{
            color:#cdb8d1;
            align-items: center;
          }
          button {
            font-size: .7rem;
            font-weight: bold;
            cursor: pointer;
            background-color: white;
            border: 1px solid #cdb8d1;
            color: #cdb8d1;
            margin:.5rem;
            padding: 1rem;
          }

          button:hover {
            background-color: #7a6c7c;
            color:white;
          }
          img {
            height: 100px;
            width: auto;
          }

        `}</style>
      </div>
    </div>
  );
}

FriendRequest.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default FriendRequest;
