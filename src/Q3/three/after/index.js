import { useState } from "react";

const AfterLoginPage = () => {
  const [loginInputs, setLoginInputs] = useState({
    id: "",
    pw: "",
  });

  const onChangeInput = (e) => {
    setLoginInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(loginInputs);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>아이디</p>
      <input name="id" value={loginInputs.id} onChange={onChangeInput} />
      <p>비밀번호</p>
      <input name="pw" value={loginInputs.pw} onChange={onChangeInput} />
      <button>로그인</button>
    </form>
  );
};

export default AfterLoginPage;
