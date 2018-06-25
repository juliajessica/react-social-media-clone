import React from 'react';
import PropTypes from 'prop-types';

function FriendRequest(props){
  return(
    <div>
      <style jsx>{`
        div {
          background-color: grey;
        }
      `}</style>

      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

FriendRequest.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default FriendRequest;
