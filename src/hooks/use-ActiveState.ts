import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useActiveState = () => {
  const { state } = useParams<{ state?: string }>();

  const savedState = localStorage.getItem("selectedState");
  const activeState = state || savedState;

  // Save state whenever URL contains it
  useEffect(() => {
    if (state) {
      localStorage.setItem("selectedState", state);
    }
  }, [state]);

  return activeState;
};
