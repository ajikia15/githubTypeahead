import { useEffect, useRef, useState } from "react";
import Suggestions from "./Suggestions";

const activeInputStyle = "w-3/5 border top-1/4 border-gray-500";
const inactiveInputStyle = "w-2/5 top-1/2 -translate-y-1/2";

export const Searchbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 4);
    }, 700);

    return () => clearInterval(intervalId);
  }, []);

  const placeholder = `Search${".".repeat(counter)}`;

  const classes = `${
    isActive ? activeInputStyle : inactiveInputStyle
  } hover:border-gray-500  border border-neutral-800 fixed left-1/2 -translate-x-1/2 duration-[350ms] bg-neutral-800 rounded-lg p-5 mx-auto transition-all text-3xl caret-neutral-400 border-neutral-600 outline-none font-bold`;

  const searchBarRef = useRef(null);
  return (
    <div className="relative">
      <input
        type="text"
        ref={searchBarRef}
        placeholder={isActive ? "" : placeholder}
        className={classes}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <div className="absolute top-0">
        <Suggestions />
      </div>
    </div>
  );
};
