import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const onGoAdminTogglePage = () => {
    navigate("/admin?page=1");
  };
  const onGoQ1 = () => {
    navigate("/ex/1");
  };
  const onGoQ2 = () => {
    navigate("/ex/2");
  };
  const onGoQ3 = () => {
    navigate("/ex/3");
  };
  const onGoQ4 = () => {
    navigate("/ex/4");
  };

  return (
    <>
      <button onClick={onGoAdminTogglePage}>AdminTogglePage</button>
      <button onClick={onGoQ1}>Q1</button>
      <button onClick={onGoQ2}>Q2</button>
      <button onClick={onGoQ3}>Q3</button>
      <button onClick={onGoQ4}>Q4</button>
    </>
  );
};

export default MainPage;
