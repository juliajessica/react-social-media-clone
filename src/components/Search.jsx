import React from 'react';


function Search(){
  return(
    <div className="searchStyle">
      <input placeholder="SEARCH"></input>
      <button type="button">SEARCH</button>

      <style jsx>{`
        .searchStyle{
          padding-top: .5rem;
        }

        input, button {
          border: .3rem solid #cdb8d1;
          border-radus: 1.75rem;
          padding: .6rem;
          margin: .6rem;
        }
      `}
      </style>
    </div>
  );

}

export default Search;
