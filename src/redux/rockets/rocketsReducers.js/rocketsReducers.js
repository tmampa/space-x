import * as RocketsActions from "../rocketsActions/rocketsActions";

const initialRocketsState = [];

const rocketsReducer = (state = initialRocketsState, action) => {
	switch (action.type) {
		case RocketsActions.LIST_ROCKETS: {
			return [...action.payload];
		}

		case RocketsActions.SET_ROCKET_RESERVATION: {
			const updatedState = state.map((rocket) => {
				if (rocket.rocketId !== action.payload.id) {
					return rocket;
				}

				return { ...rocket, rocketReserved: !rocket.rocketReserved };
			});
			return [...updatedState];
		}

		default:
			return state;
	}
};

export default rocketsReducer;
