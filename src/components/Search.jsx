import React from 'react';


function Search(){
  return(
    <div className="searchStyle">
      <input placeholder="SEARCH" className="input"></input>
        <button type="button" className="button">SEARCH</button>

      <style jsx>{`
        .searchStyle{
          padding-top: .5rem;
        }

        .input, .button {
          padding: .6rem;
          margin: .6rem;
        }
      `}
      </style>
    </div>
  );

}

export default Search;
