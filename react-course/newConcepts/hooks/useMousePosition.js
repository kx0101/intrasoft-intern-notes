import { useEffect, useState } from "react";

// set up state to track X, Y positions (useState)
// set up event to listen for mousemove
// Remove event listener if unmounted (useEffect)

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // 0, 0

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove); // adding event listener

    return () => {
      document.removeEventListener("mousemove", handleMouseMove); // removing on unmount
    };
  }, []); // runs once on mount

  return position;
};

export default useMousePosition;
