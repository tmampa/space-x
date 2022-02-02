import * as MissionsActions from '../missionsActions/missionsActions';

const initialMissionsState = [];

const missionsReducer = (state = initialMissionsState, action) => {
  switch (action.type) {
    case MissionsActions.LIST_MISSIONS: {
      return [...action.payload];
    }

    case MissionsActions.SET_MISSION_RESERVATION: {
      const updatedState = state.map((mission) => {
        if (mission.missionId !== action.payload.id) { return mission; }

        return { ...mission, missionReserved: !mission.missionReserved };
      });
      return [...updatedState];
    }

    default:
      return state;
  }
};

export default missionsReducer;
