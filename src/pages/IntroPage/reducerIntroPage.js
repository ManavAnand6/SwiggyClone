import { 
  SET_LOCATION,
  SET_MODAL_STATE,
  SET_USER_INFO,
} from "./actionIntroPage";

const initialState = {
  location: {
    longitude: null,
    latitude: null,
  },
  userInfo: {
    userPhoneNumber: "",
    userName: "",
    userEmailId: "",
  },
  modalState: {
    loginModal: false,
    signupModal: false,
  },
  openLoginForm: false,
};

export const reducerIntroPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL_STATE:
      return {
        ...state,
        modalState: {
          loginModal: payload?.loginModal,
          signupModal: payload?.signupModal,
        },
      };
    case SET_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          longitude: payload.longitude,
          latitude: payload.latitude,
        },
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: {
          userPhoneNumber: payload?.phoneNumber,
          userName: payload?.name,
          userEmailId: payload?.email,
        },
        openLoginForm: true,
      };
    default:
      return state;
  }
};
