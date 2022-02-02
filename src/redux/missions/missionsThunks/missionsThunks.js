import { listMissions } from '../missionsActions/missionsActions';

const fetchMissions = () => async (dispatch) => {
  try {
    const apiMissionsResponse = await fetch('https://api.spacexdata.com/v3/missions');
    const apiMissions = await apiMissionsResponse.json();
    dispatch(listMissions(
      apiMissions.map((mission) => ({
        missionId: mission.mission_id,
        missionName: mission.mission_name,
        missionDescription: mission.description,
        missionReserved: false,
      })),
    ));
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchMissions;
