import { useEffect, useRef } from "react";
import { setVisibleSectionId } from "../pages/RestaurantDetailsPage/restaurantDetailsPageSlice";
import { useDispatch } from "react-redux";

export function useIntersectionApi(restaurantMenuData) {
  const dispatch = useDispatch();
  const sectionRefArray = useRef([]);

  const addSectionId = (ref) => {
    sectionRefArray.current.push(ref);
  };

  useEffect(() => {
    if (restaurantMenuData.length !== 0) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            dispatch(setVisibleSectionId(sectionId));
          }
        });
      };

      const observer = new IntersectionObserver(callback, options);
      sectionRefArray.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });

      return () => {
        sectionRefArray.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      };
    }
  }, [restaurantMenuData]);

  return {
    addSectionId,
  };
}
