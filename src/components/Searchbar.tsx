import { useEffect, useState } from "react";

const activeInputStyle = "w-3/5 border top-1/4";
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
  } absolute left-1/2 -translate-x-1/2 duration-[350ms] bg-neutral-800 rounded-lg p-5 mx-auto transition-all text-3xl caret-neutral-400 border-neutral-600 outline-none font-bold`;

  return (
    <input
      type="text"
      placeholder={isActive ? "" : placeholder}
      className={classes}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    />
  );
};
