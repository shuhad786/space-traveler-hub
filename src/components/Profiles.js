import React from 'react';

import RocketList from './Pages/RocketList';
import MissionsList from './Pages/MissionsList';

const Profiles = () => (
  <>
    <table className="Profile">
      <tr>
        <th><h3 className="profileTitle">My Missions</h3></th>
        <th><h3 className="profileTitle">My Rockets</h3></th>
      </tr>
      <tr>
        <td className="missionCol">
          <MissionsList />
        </td>
        <td className="rocketCol">
          <RocketList />
        </td>
      </tr>
    </table>
  </>
);
export default Profiles;
