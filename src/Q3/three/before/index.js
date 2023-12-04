import { useState } from "react";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      id,
      pw,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <p>아이디</p>
      <input name="id" value={id} onChange={onChangeId} />
      <p>비밀번호</p>
      <input name="pw" value={pw} onChange={onChangePw} />
      <button>로그인</button>
    </form>
  );
};

export default LoginPage;
