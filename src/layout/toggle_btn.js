import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import member from "../images/user.png";
import product from "../images/package.png";

const ToggleButton = () => {
  const navigate = useNavigate();

  const [isRight, setIsRight] = useState(false);

  const toggleHandler = () => {
    setIsRight(!isRight);
  };

  // toggle 버튼이 클릭 되면 방향에 따라 member 또는 product 페이지가 나오도록 구성

  return (
    <Container onClick={toggleHandler}>
      <Background className={` ${isRight ? "toggle--checked" : null}`}>
        <Toggle className={` ${isRight ? "toggle--checked" : null}`}>
          {isRight ? <img src={member} /> : <img src={product} />}
        </Toggle>
      </Background>
      <Content>
        {isRight ? (
          <div onClick={() => navigate("/manage/member")}></div>
        ) : (
          <div onClick={() => navigate("/manage/product")}></div>
        )}
      </Content>
    </Container>
  );
};

export default ToggleButton;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
const Background = styled.div`
  position: absolute;
  width: 75px;
  height: 36px;
  border-radius: 30px;
  background-color: #40e0d0;

  &.toggle--checked {
    background-color: #ccccff;
    transition: 0.5s;
  }
`;
const Toggle = styled.div`
  position: absolute;
  top: 2px;
  left: 1px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #1b1b1b;
  transition: 0.5s;

  &.toggle--checked {
    left: 41px;
    transition: 0.5s;
  }

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
  }
`;
const Content = styled.div`
  border: 1px solid #333;
  margin-top: 60px;
  min-width: 80vw;
  min-height: 60vh;
`;
