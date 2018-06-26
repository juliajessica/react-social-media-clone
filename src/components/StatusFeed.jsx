import React from 'react';
import PropTypes from 'prop-types';

function StatusFeed(props) {
  return(
    <div>
      <img src={props.image} />
      <h3>{props.name}</h3><p>{props.time}</p>
      <p>{props.status}</p>
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
  time: PropTypes.string
};

export default StatusFeed;
