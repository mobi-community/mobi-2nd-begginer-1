/*
[4] **필터링 옵션 만들기**

- 20개씩 보기, 50개씩 보기 => perPage
- 이름 순, 마지막 로그인 순, 생년월일 순으로 정렬하기 => sortBy
- 오름차순 내림차순 정렬하기 => order

단, 모든 조건의 필터링은 반드시 모두 뒤로가기가 지원 되어야합니다.
**ex)**

**20개씩 → 50개씩 보기, 이름순, 오름차순 → 내림차순(뒤로가기) →  50개씩 보기, 이름순, 오름차순**
*/

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Filtering = ({ sortedList, setSortedList, userList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeValue = (e) => {
    searchParams.set(e.target.name, e.target.value);
    setSearchParams(searchParams);
  };

  const sortBy = searchParams.get("sortBy") || "name";

  const orderBy = searchParams.get("orderBy") || "ascend";

  useEffect(() => {
    if (userList) {
      if (sortBy === "name") {
        console.log("이름 정렬");
        SortByName();
      } else if (sortBy === "recentLogin") {
        console.log("로그인 정렬");
        sortByLastLoginDate();
      } else {
        console.log("생일 정렬");
        sortByBirthDate();
      }
    }
  }, [searchParams]);

  // 이름 순
  const SortByName = () => {
    if (orderBy === "ascend") {
      const sortedList = userList.sort((a, b) => a.name.localeCompare(b.name));
      setSortedList(sortedList);
    } else {
      const sortedList = userList.sort((a, b) => b.name.localeCompare(a.name));
      setSortedList(sortedList);
    }
  };

  // 마지막 로그인 순
  const sortByLastLoginDate = () => {
    if (orderBy === "ascend") {
      console.log("sort 이전 -> ", userList);
      const lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
        return aDate - bDate;
      });
      console.log("sort 이후 -> ", lastLoginDateList);
      setSortedList(lastLoginDateList);
    } else {
      const lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
        return bDate - aDate;
      });
      setSortedList(lastLoginDateList);
    }
  };

  //생년월일 순
  const sortByBirthDate = () => {
    if (orderBy === "ascend") {
      const sortedList = userList.sort((a, b) => {
        const aDate = new Date(a.birthDate);
        const bDate = new Date(b.birthDate);
        return aDate - bDate;
      });
      setSortedList(sortedList);
    } else {
      const sortedList = userList.sort((a, b) => {
        const aDate = new Date(a.birthDate);
        const bDate = new Date(b.birthDate);
        return bDate - aDate;
      });
      setSortedList(sortedList);
    }
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
