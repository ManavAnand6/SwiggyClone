import { useDispatch } from "react-redux";
import { setLocation } from "../../pages/IntroPage/actionIntroPage";

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
    dispatch(setLocation({ latitude, longitude }));
  };

  return {
    handleClick,
  };
}
