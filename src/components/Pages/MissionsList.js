import React from 'react';
import { useSelector } from 'react-redux';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const filterItem = missions.filter((item) => item.reserved === true);

  return (
    <>
      {filterItem.map((display) => (
        <table className="Profile" key={display.mission_id}>
          <td>{display.mission_name}</td>
        </table>
      ))}
    </>
  );
};

export default MissionsList;
