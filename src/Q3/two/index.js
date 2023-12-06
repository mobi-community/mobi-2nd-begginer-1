import useToggle from "./useToggle";

const ModeTogglePage = () => {
  const [isLight, onClickChangeMode] = useToggle(false);

  return (
    <div>
      <button onClick={onClickChangeMode}>modeChange</button>
      {isLight ? "light mode" : "dark mode"}
    </div>
  );
};

export default ModeTogglePage;
