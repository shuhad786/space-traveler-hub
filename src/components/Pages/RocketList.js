import React from 'react';
import { useSelector } from 'react-redux';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketsReserved = rockets.filter((rocket) => (rocket.reserved) === true);
  return (
    <>
      {rocketsReserved.map((display) => (
        <table className="Profile" key={display.id}>
          <td>{display.rocket_name}</td>
        </table>
      ))}
    </>
  );
};

export default RocketList;
