import { useNavigate } from "react-router-dom";

const ToggleButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/member")}>회원관리</button>
      <button onClick={() => navigate("/product")}>상품관리</button>
    </>
  );
};

export default ToggleButton;
