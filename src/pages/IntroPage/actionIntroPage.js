const module_key = 'introPage';

export const SET_LOCATION = `${module_key}_set_location`;
export const SET_USER_INFO = `${module_key}_set_user_info`;
export const SET_MODAL_STATE = `${module_key}_set_modal_state`;

export const setLocation = (data) => ({
  type: SET_LOCATION,
  payload: data,
});

export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  payload: data,
});

export const setModalState = (data) => ({
  type: SET_MODAL_STATE,
  payload: data,
});