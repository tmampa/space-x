export const LIST_MISSIONS = 'spaceX/missions/LIST_MISSIONS';
export const SET_MISSION_RESERVATION = 'spaceX/missions/SET_MISSION_RESERVATION';

export const listMissions = (payload) => ({
  type: LIST_MISSIONS,
  payload,
});

export const setMissionReservation = (payload) => ({
  type: SET_MISSION_RESERVATION,
  payload,
});
