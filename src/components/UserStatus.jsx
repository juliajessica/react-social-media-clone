import React from 'react';
import PropTypes from 'prop-types';

function UserStatus(props){
  let _statusText = null;
  let _image = 'https://png.icons8.com/color/1600/circled-user-female-skin-type-6.png';
  let _name = 'Jessica Schmitz';
  let _time = '4:05 PM';
  // console.log(_statusText.value);

  function handleNewUserStatusSubmission(event) {
    event.preventDefault();
    console.log(props);
    props.onClickAddUserStatus({image: _image, name: _name, time: _time, status: _statusText.value});

  }

  return(
    <div>
      <div className="userStatus">
        <form onSubmit={handleNewUserStatusSubmission}>
          <input
            type='text'
            id='statusText'
            placeholder="UPDATE YOUR STATUS"
            ref={(input) => {_statusText = input;}}/>
          <button type="submit" onClick={this.handleNewUserStatusSubmission}>ADD</button>
        </form>


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

UserStatus.propTypes = {
  onClickAddUserStatus: PropTypes.func
};

export default UserStatus;
