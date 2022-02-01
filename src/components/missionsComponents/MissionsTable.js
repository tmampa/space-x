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
    <div>
      {
        missionsList.map((mission) => (
          <div key={mission.mission_id}>
            <MissionsRow
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              mission_description={mission.mission_description}
              mission_reserved={mission.mission_reserved}
            />
          </div>
        ))
      }
    </div>
  );
};

export default MissionsTable;
