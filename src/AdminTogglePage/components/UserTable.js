import { useSearchParams } from "react-router-dom";
import OneUser from "./OneUser";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const UserTable = ({ userList }) => {
  //useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  //현재 페이지
  const currentPage = searchParams.get("page") || 1;
  //perPage
  const perPage = searchParams.get("perPage") || 20;
  //sortBy
  const sortBy = searchParams.get("sortBy") || "name";

  //orderBy
  const orderBy = searchParams.get("orderBy") || "ascend";

  //데이터 정렬

  //데이터 나누기
  const currentFirstIndex = (currentPage - 1) * perPage;
  const currentLastIndex = currentPage * perPage;

  //현재 페이지에 보이는 콘텐츠 리스트
  const userListData = userList.slice(currentFirstIndex, currentLastIndex);

  return (
    <>
      <table>
        <tr>
          <td>아이디</td>
          <td>이름</td>
          <td>생년월일</td>
          <td>핸드폰 번호</td>
          <td>마지막 로그인 날짜</td>
        </tr>
        {userListData.map((user, index) => {
          return <OneUser key={user.id} user={user} />;
        })}
      </table>
    </>
  );
};

export default UserTable;
