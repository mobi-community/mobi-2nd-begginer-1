import UserTable from "./components/UserTable";
import { userData } from "../data/user";
import Pagination from "./components/Pagination";
import Filtering from "./components/Filtering";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
const AdminTogglePage = () => {
  const userList = userData(200);
  const totalLength = userList.length;
  // 페이지네이션 버튼 그룹당 페이지 수
  const pagesPerGroup = 5;
  const [sortedList, setSortedList] = useState(userList);

  //sortBy

  //데이터를 가공 => userTable props로 전달
  //필터링된 기준으로 데이터 정렬, 자르기
  // 이름 순, 마지막 로그인 순, 생년월일 순, 오름차순 내림차순

  return (
    <>
      <Filtering
        sortedList={sortedList}
        setSortedList={setSortedList}
        userList={userList}
      />
      <UserTable userList={sortedList} />
      <Pagination totalLength={totalLength} pagesPerGroup={pagesPerGroup} />
    </>
  );
};

export default AdminTogglePage;
