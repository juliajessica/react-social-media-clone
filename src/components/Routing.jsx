import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './Profile';
import StatusListControl from './StatusListControl';
import FriendRequestList from './FriendRequestList';

function Routing(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={StatusListControl} />
        <Route exact path='/' component={FriendRequestList} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default Routing;
