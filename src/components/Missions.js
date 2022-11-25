import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { displayMission, joinMission, cancelMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMission());
  }, [dispatch]);

  return (
    <table className="Mission">
      <tr>
        <th>Missions</th>
        <th>description</th>
        <th>status</th>
        <th className="text-none">s</th>
      </tr>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td className="col1">
            <h3>{mission.mission_name}</h3>
          </td>
          <td className="col2">
            {mission.description}
          </td>
          <td className="col3">
            <span className="badgeActive" style={{ display: mission.reserved ? 'flex' : 'none' }}>Active member</span>
            <span className="badgeNotActive" style={{ display: mission.reserved ? 'none' : 'flex' }}>Not active member</span>
          </td>
          <td className="col4">
            <button type="button" className="joinBtn" style={{ display: mission.reserved ? 'none' : 'flex' }} onClick={() => dispatch(joinMission(mission))}>
              Join Mission
            </button>

            <button type="button" className="cancelBtn" style={{ display: mission.reserved ? 'flex' : 'none' }} onClick={() => dispatch(cancelMission(mission))}>
              Leave Mission
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Missions;
