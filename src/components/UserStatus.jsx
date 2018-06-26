import React from 'react';

function UserStatus(){
  return(
    <div>
      <div className="userStatus">
        <input placeholder="UPDATE YOUR STATUS"></input>
        <button>ADD</button>


        <style jsx>{`

          .userStatus {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          input, button {
            border: .3rem solid #cdb8d1;
            border-radus: 1.75rem;
            padding: .6rem;
            margin:.2rem;
          }
          button:hover {
            background-color: #7a6c7c;
            color:white;
          }
        `}</style>
      </div>
    </div>
  );
}

export default UserStatus;
