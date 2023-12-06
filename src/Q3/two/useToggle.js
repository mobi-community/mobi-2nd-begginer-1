import { useState } from "react";

const useToggle = (defaultValue) => {
  const [toggle, setToggle] = useState(defaultValue);

  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, onClickToggle];
};

export default useToggle;
