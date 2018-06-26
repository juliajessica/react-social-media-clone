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
        button {
          font-size: .7rem;
          font-weight: bold;
          cursor: pointer;
          background-color: white;
          border: 1px solid #cdb8d1;
          color:#cdb8d1;
          margin:.5rem;
          padding: 1rem;
        }
        button:hover{
          background-color: #7a6c7c;
          color:white;
        }
      `}</style>
    </div>


  );

}
export default Menu;
