import { listMissions } from '../missionsActions/missionsActions';

const fetchMissions = () => async (dispatch) => {
  try {
    const apiMissionsResponse = await fetch('https://api.spacexdata.com/v3/missions');
    const apiMissions = await apiMissionsResponse.json();
    dispatch(listMissions(
      apiMissions.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        mission_description: mission.description,
        mission_reserved: false,
      })),
    ));
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchMissions;
