import React from 'react';


function Search(){
  return(
    <div className="searchStyle">
      <input placeholder="SEARCH"></input>
        <button type="button">SEARCH</button>

      <style jsx>{`
        .searchStyle{
          padding-top: 20px;
          border-radus: 10px;
      `}
      </style>
    </div>
  );

}

export default Search;
