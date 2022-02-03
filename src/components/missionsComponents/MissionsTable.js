import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../../redux/missions/missionsThunks/missionsThunks';
import MissionsRow from './MissionsRow';
import './missionsTable.css';

const MissionsTable = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    if (missionsList.length < 1) {
      dispatch(fetchMissions());
    }
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>
            {' '}
          </th>
        </tr>
        {
          missionsList.map((mission) => (
            <MissionsRow
              key={mission.missionId}
              missionId={mission.missionId}
              missionName={mission.missionName}
              missionDescription={mission.missionDescription}
              missionReserved={mission.missionReserved}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default MissionsTable;
