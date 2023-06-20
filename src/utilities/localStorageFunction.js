export const getItemFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
};

export const setItemFromLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const clearLocalStorage = () => {
  localStorage.clear();
}