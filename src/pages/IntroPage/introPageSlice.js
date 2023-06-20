import { createSlice } from "@reduxjs/toolkit";

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

export const introPageSlice = createSlice({
  name: "introPage",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = {
        userPhoneNumber: action.payload?.phoneNumber,
        userName: action.payload?.name,
        userEmailId: action.payload?.email,
      };
      state.openLoginForm = true;
    },

    setModalState: (state, action) => {
      state.modalState = {
        loginModal: action?.payload?.loginModal,
        signupModal: action?.payload?.signupModal,
      };
    },

    isLocationSet: (state, action) => {
      state.isUserLocationSet = action.payload;
    },
  },
});

export const { setUserInfo, setModalState, isLocationSet } = introPageSlice.actions;
export const introPageReducer = introPageSlice.reducer;
