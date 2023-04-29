import { SET_LOCATION } from "./actionIntroPage";

const initialState = {
  location: {
    longitude: null,
    latitude: null,
  },
};

export const reducerIntroPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          longitude: payload.longitude,
          latitude: payload.latitude,
        },
      };
    default:
      return state;
  }
};
