import React from 'react';

function Menu(){
  let menuStyle = {
    margin: '10px',
  };

  return(
    <div style={menuStyle}>
      <button className="btn" type="button">MENU</button>
      <button className="btn" type="button">NOTIFICATIONS</button>
      <button className="btn" type="button">MESSAGES</button>

      <style jsx>{`
        .btn {
          padding: 15px;
          background-color: white;
          font-size: .7rem;
          font-weight: bold;
          cursor: pointer;
          margin: .4rem;
        }
        .btn:hover{
          background-color: grey;
          color:white;
        }
      `}</style>
    </div>


  );

}
export default Menu;
