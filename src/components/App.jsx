import React from 'react';
import Routing from './Routing';
import Nav from './Nav';

function App(){
  return (
    <div>
      <Nav />
      <Routing/>
      <div className="app">

        <style jsx global>{`
          .app {
            margin: auto;
            display: block;
            display:flex;
            flex-direction: space-between;
          }
        `}</style>
      </div>
    </div>
  );
}

export default App;
