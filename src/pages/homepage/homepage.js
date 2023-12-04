import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/page/1")}>입장</button>
    </>
  );
};

export default HomePage;
