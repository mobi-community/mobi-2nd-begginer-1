import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/common.style";
import { useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({
  users,
  setUsers,
  setUserPerPage,
  setButtonArray,
  currentPage,
  setCurrentPage,
}) => {
  // 뒤로가기
  const navigate = useNavigate();
  const [param, setParam] = useSearchParams();
  const keyword = param.get("sort");
  console.log("param값은?", keyword);

  const [sortMethod, setSortMethod] = useState("null");
  const [sortedList, setSortedList] = useState("");

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

  useEffect(() => {
    console.log(users);
    navigate(`/manage/member?page=${currentPage}&sort=${sortMethod}`);
  }, [sortMethod]);

  console.log(sortMethod);

  // 오름차순(ascend), 내림차순(descend)
  const defaultAscend = (e) => {
    if (e.target.value === "오름차순") {
      setUsers(() => [...users].sort((a, b) => (a.id > b.id ? -1 : 1)));
      setSortMethod("오름차순");
    } else if (e.target.value === "내림차순") {
      setUsers(() => [...users].sort((b, a) => (a.id > b.id ? -1 : 1)));
      setSortMethod("내림차순");
    }
  };
  // 이름 기준
  const filterByName = () => {
    let filteredList;
    if (sortMethod === "오름차순") {
      filteredList = setUsers(
        [...users].sort((a, b) => (a.name > b.name ? -1 : 1))
      );
      setSortedList(filteredList);
    } else if (sortMethod === "내림차순") {
      filteredList = setUsers(
        [...users].sort((b, a) => (a.name > b.name ? -1 : 1))
      );
      setSortedList(filteredList);
    }
  };
  // 생일 기준
  const filterByBirth = () => {};

  // 로그인 시점 기준
  // const filterByLogin = (e) => {
  //   if (e.target.value === "latest") {
  //     setUsers([...users].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)));
  //   }
  //   if (e.target.value === "olden") {
  //     setUsers([...users].sort((b, a) => (a.createdAt > b.createdAt ? -1 : 1)));
  //   }
  // };

  // useEffect(() => {
  //   filterByName();
  // }, [users]);

  return (
    <ButtonBox>
      <select onChange={changeUserPerPage}>
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select>
      {/* sort standard */}
      <select onChange={filterByName}>
        <option value={"number"}>회원번호</option>
        <option value={"name"}>이름</option>
        <option value={"birth"}>생일</option>
        <option value={"login"}>최근 로그인</option>
      </select>
      {/* sort method */}
      <select onChange={defaultAscend}>
        <option>나열 방향</option>
        <option value={"오름차순"}>오름차순</option>
        <option value={"내림차순"}>내림차순</option>
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

  & > button {
    ${Button}
  }
  & > select {
    ${Button}
  }
`;
