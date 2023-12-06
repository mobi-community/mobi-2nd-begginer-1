//재사용되는 컴포넌트일 때
import { styled } from "styled-components";

const BasicButton = ({ children, width, height }) => {
  return (
    <S.Button width={width} height={height}>
      {children}
    </S.Button>
  );
};

export default BasicButton;

export const ButtonPage = () => {
  return (
    <S.ButtonWrapper>
      <BasicButton width={100} height={30}>
        로그인
      </BasicButton>
      <BasicButton width={120} height={30}>
        회원가입
      </BasicButton>
    </S.ButtonWrapper>
  );
};

const Button = styled.div`
  width: ${({ width }) => (width ? width : 200)}px;
  height: ${({ height }) => (height ? height : 50)}px;
  background-color: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const S = {
  Button,
  ButtonWrapper,
};
