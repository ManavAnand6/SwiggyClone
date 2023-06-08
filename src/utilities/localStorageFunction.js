export const getItemFromLocalStorage = (key) => {
  console.log('key', key);
  return JSON.parse(localStorage.getItem(key))
};

export const setItemFromLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const clearLocalStorage = () => {
  localStorage.clear();
}