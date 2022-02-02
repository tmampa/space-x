import * as MissionsActions from '../missionsActions/missionsActions';

const initialMissionsState = [];

const missionsReducer = (state = initialMissionsState, action) => {
  switch (action.type) {
    case MissionsActions.LIST_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
