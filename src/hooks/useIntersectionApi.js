import { useEffect } from "react";

export function useIntersectionApi({ sectionRefArray }) {
  useEffect(() => {
    console.log('sectionRefArray', sectionRefArray);
    if (sectionRefArray.current.length !== 0) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log("sectionId", sectionId);
            // Perform actions when the section enters the viewport
          } else {
            const sectionId = entry.target.id;
            console.log("sectionId", sectionId);
            // Perform actions when the section exits the viewport
          }
        });
      };

      const observer = new IntersectionObserver(callback, options);
      sectionRefArray.current.forEach((ref) => {
        if (ref) {
          console.log("sectionRefArray[ref]", ref);
          observer.observe(ref);
        }
      });
    }

    return () => {
      sectionRefArray.current.forEach((ref) => {
        if (ref) {
          console.log("sectionRefArray[ref]", ref);
          observer.unobserve(ref);
        }
      });
    };
  }, [sectionRefArray]);

  return null;
}
