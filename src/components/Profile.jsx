import React from 'react';

function Profile(){
  return(
    <div>
      <div className="profileStyle">
        <img src="https://png.icons8.com/color/260/user-female-circle.png" />
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
            justify-content: space-around;
          }

          .list-follow p {
            padding: .4rem;
            color: #f4b942;
            font-weight: bold;
          }
          .list-follow p:hover {
            color: #e0553c;
          }

        `}
      </style>

    </div>
  );
}

export default Profile;
