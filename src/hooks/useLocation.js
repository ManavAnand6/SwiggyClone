import { useDispatch } from "react-redux";
import { isLocationSet } from "../pages/IntroPage/actionIntroPage";
import { setItemFromLocalStorage } from "../utilities/localStorageFunction";

export function useLocation() {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setItemFromLocalStorage('latitude', latitude);
    setItemFromLocalStorage('longitude', longitude);
    dispatch(isLocationSet(true));
  };

  return {
    handleClick,
  };
}
