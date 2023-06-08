import { 
  IS_LOCATION_SET,
  SET_MODAL_STATE,
  SET_USER_INFO,
} from "./actionIntroPage";

const initialState = {
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
  isUserLocationSet: false,
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
    case IS_LOCATION_SET:
      return {
        ...state,
        isUserLocationSet: payload,
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
