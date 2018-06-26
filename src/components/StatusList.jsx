import React from 'react';
import UserStatus from './UserStatus';
import StatusFeed from './StatusFeed';

let statusListData = [
  {
    image: 'https://png.icons8.com/color/1600/circled-user-female-skin-type-6.png',
    name: 'Lulu Smith',
    time: '4:30pm',
    status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    image: 'https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png',
    name: 'Bo Ospipov',
    time: '4:35pm',
    status: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: 'https://png.icons8.com/color/1600/circled-user-male-skin-type-5.png',
    name: 'Brett Swanson',
    time: '4:42pm',
    status: 'ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://png.icons8.com/color/1600/circled-user-female-skin-type-3.png',
    name: 'Margaret Hanken',
    time: '5:00pm',
    status: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    image: 'https://png.icons8.com/color/260/user-female-circle.png',
    name: 'Luci Everett',
    time: '5:01pm',
    status: 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

function StatusList(){
  return(
    <div>
      <div className="statusFeed">
        <UserStatus />
        <hr/>
        {statusListData.map((newsFeed, index) =>
          <StatusFeed
            image={newsFeed.image}
            name={newsFeed.name}
            time={newsFeed.time}
            status={newsFeed.status}
            key={index} />
        )}
      </div>


      <style jsx>{`

        .statusFeed{
          padding: 4rem;
          border: 1px solid grey;
          padding: 1rem;
          margin: .7rem;
        }
      `}
      </style>


    </div>

  );

}
export default StatusList;
