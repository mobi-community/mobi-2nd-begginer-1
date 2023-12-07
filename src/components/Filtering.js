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

  return (
    <S.Wrapper>
      <S.Text>filter options</S.Text>
      <S.Select name="perPage" onChange={onChangeValue}>
        <option value="20" selected={Number(perPage) === 20}>
          20개씩
        </option>
        <option value="50" selected={Number(perPage) === 50}>
          50개씩
        </option>
      </S.Select>
      <S.Select name="sortBy" onChange={onChangeValue}>
        <option value="name" selected={sortBy === "name"}>
          이름 순
        </option>
        <option value="recentLogin" selected={sortBy === "recentLogin"}>
          마지막 로그인 순
        </option>
        <option value="birth" selected={sortBy === "birthDate"}>
          생년월일 순
        </option>
      </S.Select>
      <S.Select name="orderBy" onChange={onChangeValue}>
        <option value="ascend" selected={orderBy === "ascend"}>
          오름차순
        </option>
        <option value="descend" selected={orderBy === "descend"}>
          내림차순
        </option>
      </S.Select>
    </S.Wrapper>
  );
};

export default Filtering;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 10px;
`;

const Text = styled.div`
  font-weight: 600;
`;

const Select = styled.select`
  font-size: 15px;
`;

export const S = {
  Wrapper,
  Text,
  Select,
};
