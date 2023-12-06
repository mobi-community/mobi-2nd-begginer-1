/*
[4] **필터링 옵션 만들기**

- 20개씩 보기, 50개씩 보기 => perPage
- 이름 순, 마지막 로그인 순, 생년월일 순으로 정렬하기 => sortBy
- 오름차순 내림차순 정렬하기 => order

단, 모든 조건의 필터링은 반드시 모두 뒤로가기가 지원 되어야합니다.

**ex)**

**20개씩 → 50개씩 보기, 이름순, 오름차순 → 내림차순(뒤로가기) →  50개씩 보기, 이름순, 오름차순**
*/

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Filtering = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const [filtering, setFiltering] = useState({
  //   perPage: "",
  //   sortBy: "",
  //   orderBy: "",
  // });

  const onChangeValue = (e) => {
    // setFiltering((prev) => {
    //   return {
    //     ...prev,
    //     [e.target.name]: e.target.value,
    //   };
    // });
    searchParams.set(e.target.name, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <S.Wrapper>
      <select name="perPage" onChange={onChangeValue}>
        <option value="20">20개씩</option>
        <option value="50">50개씩</option>
      </select>
      <select name="sortBy" onChange={onChangeValue}>
        <option value="name">이름 순</option>
        <option value="recentLogin">마지막 로그인 순</option>
        <option value="birth">생년월일 순</option>
      </select>
      <select name="orderBy" onChange={onChangeValue}>
        <option value="ascend">오름차순</option>
        <option value="descend">내림차순</option>
      </select>
    </S.Wrapper>
  );
};

export default Filtering;

const Wrapper = styled.div`
  width: 500px;
`;

export const S = {
  Wrapper,
};
