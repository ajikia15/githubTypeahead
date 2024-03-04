import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

enum InputState {
  Active = "w-3/5 border",
  Inactive = "w-2/5",
}
export const Searchbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className={`${
          isActive ? InputState.Active : InputState.Inactive
        } absolute bg-neutral-800 rounded-lg p-54 mx-auto transition-all text-3xl p-5 caret-neutral-400 border-neutral-600 outline-none font-bold`}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </>
  );
};
