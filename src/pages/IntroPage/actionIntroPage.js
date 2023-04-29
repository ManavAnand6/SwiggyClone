const module_key = 'introPage';

export const SET_LOCATION = `${module_key}_set_location`;

export const setLocation = (data) => ({
  type: SET_LOCATION,
  payload: data,
});
