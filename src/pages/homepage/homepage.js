import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Click Below</Title>
      <Welcome onClick={() => navigate("/manage")}>
        <Message>Yes, Here</Message>
      </Welcome>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3f3f3;
`;
const Title = styled.h1``;
const Welcome = styled.div`
  width: 200px;
  height: 80px;
  margin: 30px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  align-items: center;
`;
const Message = styled.h3`
  color: #f3f3f3;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #fff;
    text-shadow: 0px 11px 10px rgba(81, 67, 21, 0.8);
  }
`;
