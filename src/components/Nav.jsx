import React from 'react';
import Menu from './Menu';
import Search from './Search';

function Nav(){

  return(
    <div className="navStyle">
      <Menu />
      <Search />

      <style jsx>{`
        .navStyle {
          display: flex;
          justify-content: space-between;
          flex-direction: columns;
        }
      `}</style>
    </div>



  );
}

export default Nav;
