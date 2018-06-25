import React from 'react';

function Profile(){
  return(
    <div>
      <div className="profileStyle">
        <h1>Julia Sheremet</h1>
        <div className="list-follow">
          <p>TWEET</p>
          <p>FOLLOWING</p>
          <p>FOLLOWERS</p>
        </div>
      </div>
      <div className="textStyle">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>



      <style jsx>{`
          .profileStyle, .textStyle {
            border 1px solid grey;
            padding: 1rem;
            margin: .7rem;
          }
          .list-follow {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }

          .list-follow p {
            padding: 1rem;
          }
        `}
      </style>

    </div>
  );
}

export default Profile;
