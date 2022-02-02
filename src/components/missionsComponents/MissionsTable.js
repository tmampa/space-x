import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMissions from "../../redux/missions/missionsThunks/missionsThunks";
import MissionsRow from "./MissionsRow";

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
          <th> {" "} </th>
        </tr>
        {
          missionsList.map((mission) => (
            <MissionsRow
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              mission_description={mission.mission_description}
              mission_reserved={mission.mission_reserved}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default MissionsTable;
