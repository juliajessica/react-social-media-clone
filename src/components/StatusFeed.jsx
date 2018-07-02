import React from 'react';
import PropTypes from 'prop-types';

function StatusFeed(props) {
   console.log(props.likeButton);
  return(
    <div>
      <img src={props.image} />
      <h3>{props.name}</h3><p>{props.time}</p>
      <p>{props.status}</p>
      <button type="button" onClick={props.onLikeButton}>{props.likeStatus === false ? <span>Unlike</span> : <span>Like</span>}</button>
      <hr/>
      <style jsx>{`
        h3 {
          color:#cdb8d1;
        }

        img {
          width:150px;
          height: auto;
        }
      `}</style>
    </div>
  );
}

StatusFeed.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  time: PropTypes.string,
  onLikeButton: PropTypes.func
};

export default StatusFeed;
