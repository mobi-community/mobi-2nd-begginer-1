import { useEffect, useState } from "react";
import styled from "styled-components";

const Filter = ({ users, setUsers, setUserPerPage, setButtonArray, setCurrentPage }) => {
  const [isAscend, setIsAscend] = useState(true);

  // 한 페이지 당  회원 수 변경하기
  const changeUserPerPage = (e) => {
    if (e.target.value === "20") {
      setUserPerPage(20);
      setButtonArray([0, 1, 2, 3, 4]);
    }
    if (e.target.value === "50") {
      setUserPerPage(50);
      setCurrentPage(1);
      setButtonArray([0, 1, 2, 3]);
    }
  };

  // 오름차순(ascend), 내림차순(descend)
  // 이름 기준
  const filterByName = () => {
    setIsAscend(!isAscend);
    if (isAscend) {
      setUsers([...users].sort((a, b) => (a.name > b.name ? -1 : 1)));
    } else {
      setUsers([...users].sort((b, a) => (a.name > b.name ? -1 : 1)));
    }
    // console.log("filter array", filterNameList);
    // console.log("original array", users);
  };
  // 생일 기준

  // 로그인 시점 기준

  // useEffect(() => {
  //   filterByName();
  // }, [users]);

  return (
    <ButtonBox>
      <button onClick={filterByName}>{isAscend ? "가나다 순" : "하파타 순"}</button>
      <button>생년월일</button>
      <button>로그인</button>
      <select onChange={changeUserPerPage}>
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select>
    </ButtonBox>
  );
};
export default Filter;

// select options
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
