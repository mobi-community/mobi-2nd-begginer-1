//재사용되는 컴포넌트일 때
import { styled } from "styled-components";

const BasicButton = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default BasicButton;

export const LoginPage = () => {
  return (
    <div>
      <BasicButton>로그인</BasicButton>
      <BasicButton>회원가입</BasicButton>
    </div>
  );
};

const Button = styled.div``;

const S = {
  Button,
};
