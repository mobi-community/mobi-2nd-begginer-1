import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { USER_TABLE_FILTER } from "../constant/UserTableFilter";
import { flexCenter } from "../style/common";

const Filtering = ({ sortedList, setSortedList, userList }) => {
  const userTableFilterList = USER_TABLE_FILTER;

  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeValue = (e) => {
    searchParams.set(e.target.name, e.target.value);
    setSearchParams(searchParams);
  };

  const sortBy = searchParams.get("sortBy") || "name";
  const orderBy = searchParams.get("orderBy") || "ascend";
  const currentPage = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 20;

  //데이터 나누기

  //현재 페이지에 보이는 콘텐츠 리스트
  const sliceDataByPerPage = (list) => {
    const currentFirstIndex = (currentPage - 1) * perPage;
    const currentLastIndex = currentPage * perPage;
    const slicedData = list.slice(currentFirstIndex, currentLastIndex);
    return slicedData;
  };

  useEffect(() => {
    if (sortBy === "name") {
      SortByName();
    } else if (sortBy === "recentLogin") {
      sortByLastLoginDate();
    } else {
      sortByBirthDate();
    }
  }, [searchParams]);

  // 이름 순
  const SortByName = () => {
    let nameList;
    if (orderBy === "ascend") {
      nameList = userList.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      nameList = userList.sort((a, b) => b.name.localeCompare(a.name));
    }
    setSortedList(nameList);
    const slicedData = sliceDataByPerPage(nameList);
    setSortedList(slicedData);
  };

  // 마지막 로그인 순
  const sortByLastLoginDate = () => {
    let lastLoginDateList;
    if (orderBy === "ascend") {
      lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
        return aDate - bDate;
      });
    } else {
      lastLoginDateList = userList.sort((a, b) => {
        const aDate = new Date(a.lastLoginDate);
        const bDate = new Date(b.lastLoginDate);
        return bDate - aDate;
      });
    }
    const slicedData = sliceDataByPerPage(lastLoginDateList);
    setSortedList(slicedData);
  };

  //생년월일 순
  const sortByBirthDate = () => {
    let birthDateList;
    if (orderBy === "ascend") {
      birthDateList = userList.sort((a, b) => {
        const aDate = new Date(a.birthDate);
        const bDate = new Date(b.birthDate);
        return aDate - bDate;
      });
    } else {
      birthDateList = userList.sort((a, b) => {
        const aDate = new Date(a.birthDate);
        const bDate = new Date(b.birthDate);
        return bDate - aDate;
      });
    }
    const slicedData = sliceDataByPerPage(birthDateList);
    setSortedList(slicedData);
  };

  //현재 선택된 옵션 값
  const searchParamsArr = [Number(perPage), sortBy, orderBy];

  return (
    <S.Wrapper>
      <S.Text>filter options</S.Text>
      {userTableFilterList.map((select, index) => (
        <S.Select name={select.type} onChange={onChangeValue}>
          {select.option.map((option) => (
            <S.Option
              value={option.value}
              selected={searchParamsArr[index] === option.value}
            >
              {option.text}
            </S.Option>
          ))}
        </S.Select>
      ))}
    </S.Wrapper>
  );
};

export default Filtering;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  ${flexCenter}
  margin-top: 40px;
  gap: 10px;
`;

const Text = styled.div`
  font-weight: 600;
`;

const Select = styled.select`
  font-size: 15px;
  border-radius: 10px;
  &:hover {
    border-width: 2px;
    cursor: pointer;
  }
`;

const Option = styled.option``;

export const S = {
  Wrapper,
  Text,
  Select,
  Option,
};
