export const LIST_ROCKETS = 'spaceX/missions/LIST_ROCKETS';
export const SET_ROCKET_RESERVATION = 'spaceX/missions/SET_ROCKET_RESERVATION';

export const listRockets = (payload) => ({
  type: LIST_ROCKETS,
  payload,
});

export const setRocketReservation = (payload) => ({
  type: SET_ROCKET_RESERVATION,
  payload,
});
