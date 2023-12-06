import { useSearchParams } from "react-router-dom";
import OneUser from "./OneUser";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const UserTable = ({ userList }) => {
  //useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();

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
        {userList.map((user, index) => {
          return <OneUser key={user.id} user={user} />;
        })}
      </table>
    </>
  );
};

export default UserTable;
