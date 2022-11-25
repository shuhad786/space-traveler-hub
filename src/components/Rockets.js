import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayRocket, reserveRocket, cancelReserve } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayRocket());
  }, [dispatch]);

  return (
    <>
      {rockets.map((rocket) => (
        <div className="Rocket" key={rocket.id}>
          <img className="rocketImage" src={rocket.flickr_images} alt="rocket img" />
          <div className="Rocket-right">
            <div className="Rocket-top">
              <h3 className="rocketTitle">{rocket.rocket_name}</h3>
              <p className="reserved">
                <span className="reservedPill" style={{ display: rocket.reserved ? 'flex' : 'none' }}>Reserved</span>
                {rocket.description}
              </p>
            </div>
            <div className="Rocket-bottom">
              <button type="button" className="reserveBtn" style={{ display: rocket.reserved ? 'none' : 'flex' }} onClick={() => dispatch(reserveRocket(rocket))}>
                RESERVE ROCKET
              </button>

              <button type="button" className="cancelRocketBtn" style={{ display: rocket.reserved ? 'flex' : 'none' }} onClick={() => dispatch(cancelReserve(rocket))}>
                CANCEL RESERVATION
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
