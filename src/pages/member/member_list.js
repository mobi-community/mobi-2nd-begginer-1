import styled from "styled-components";
import { UserList } from "../../__mock__/user_list";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberList = () => {
  /**
   * TODOLIST (12/07, Thu)
   * 1. DI - 기능별 컴포넌트화하기
   * 2. buttonArray 재사용 가능하게 깔끔하게 바꾸기
   */

  // new Array(limit), (x, i) => i)
  const [users, setUsers] = useState(UserList());
  const [buttonArray, setButtonArray] = useState([0, 1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerUser, setPagePerUser] = useState(20);
  const totalPage = users.length / pagePerUser;
  const pageNationUserList = [];
  for (let i = 0; i < totalPage; i++) {
    pageNationUserList.push([
      users.slice(pagePerUser * i, pagePerUser * (i + 1)),
    ]);
  }
  const [pagePerUserList, setPagePerUserList] = useState(
    pageNationUserList[currentPage - 1]
  );

  // "<<" 버튼 클릭
  const handleFirstPage = () => {
    if (pagePerUser === 50) {
      setCurrentPage(1);
      return setButtonArray([0, 1, 2, 3]);
    }
    setButtonArray([0, 1, 2, 3, 4]);
    setCurrentPage(1);
  };

  // ">>" 버튼 클릭
  const handleLastPage = () => {
    if (pagePerUser === 50) setCurrentPage(4);
    // totalPage = 2 -> [0,1] , totalPage = 3 -> [0,1,2]
    if (totalPage < 5) return setButtonArray([0, 1, 2, 3]);
    setButtonArray([
      totalPage - 5,
      totalPage - 4,
      totalPage - 3,
      totalPage - 2,
      totalPage - 1,
    ]);
    setCurrentPage(totalPage);
  };

  // "<" 버튼 클릭
  const handlePrev = () => {
    const prevPage = buttonArray.map((value) => {
      setCurrentPage(currentPage - 1);
      if (currentPage <= 1) {
        setCurrentPage(1);
      }
      return value - 1;
    });
    if (prevPage[0] < 0) return [0, 1, 2, 3, 4];
    setButtonArray(prevPage);
  };

  // ">" 버튼 클릭
  const handleNext = () => {
    const nextPage = buttonArray.map((value) => {
      setCurrentPage(currentPage + 1);
      if (currentPage >= totalPage) {
        setCurrentPage(totalPage);
      }
      return value + 1;
    });
    if (nextPage[nextPage.length - 1] > totalPage - 1)
      return [
        totalPage - 5,
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
      ];
    setButtonArray(nextPage);
  };

  const handlePage = (pageButton) => {
    setCurrentPage(pageButton + 1);
  };

  // filter
  const pagePerUserTwenty = () => {
    setPagePerUser(20);
    setButtonArray([0, 1, 2, 3, 4]);
  };

  const pagePerUserFifty = () => {
    setPagePerUser(50);
    setCurrentPage(1);
    setButtonArray([0, 1, 2, 3]);
  };

  // const changeOrderMethod = (e) => {
  //   if (e.target.value === "이름") {
  //     const filterNameList = [...users];
  //     setUsers(filterNameList.sort((a, b) => (a.name > b.name ? -1 : 1)));
  //   }
  // };

  const filterByName = () => {
    const filterNameList = [...users].sort((a, b) =>
      a.name > b.name ? -1 : 1
    );
    console.log(filterNameList);
  };

  useEffect(() => {
    console.log(currentPage);
    setPagePerUserList(pageNationUserList[currentPage - 1]);
  }, [currentPage, pagePerUser]);

  return (
    <Container>
      <ButtonBox>
        {/* <select onChange={changeOrderMethod}>
          <option>--정렬방식--</option>
          <option value={"회원번호"}>회원번호</option>
          <option value={"이름"}>이름</option>
          <option value={"생년월알"}>생년월일</option>
          <option value={"로그인"}>로그인</option>
        </select> */}
        <button onClick={filterByName}>이름</button>
        <button>생년월일</button>
        <button>로그인</button>
        <button onClick={pagePerUserTwenty}>20개씩</button>
        <button onClick={pagePerUserFifty}>50개씩</button>
        {/* <select>
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select> */}
      </ButtonBox>
      <Table>
        <thead>
          <tr>
            <Th>회원번호</Th>
            <Th>이름</Th>
            <Th>생년월일</Th>
            <Th>전화번호</Th>
            <Th>로그인시간</Th>
          </tr>
        </thead>
        <tbody>
          {pagePerUserList[0].map((user) => (
            <tr>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.birthday}</Td>
              <Td>{user.number}</Td>
              <Td>{user.createdAt}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <JumpFirst onClick={handleFirstPage}>{"<<"}</JumpFirst>
        <Prev onClick={handlePrev}>{"<"}</Prev>
        {buttonArray.map((pageButton) => (
          <NumberButton
            onClick={() => handlePage(pageButton)}
            style={{
              backgroundColor:
                currentPage === pageButton + 1 ? "aliceblue" : "#fff",
            }}
          >
            {pageButton + 1}
          </NumberButton>
        ))}
        <Next onClick={handleNext}>{">"}</Next>
        <JumpLast onClick={handleLastPage}>{">>"}</JumpLast>
      </Pagination>
    </Container>
  );
};

export default MemberList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
// select options
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

// member table
const Table = styled.table`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > tbody {
    flex-direction: row;
  }
`;
const Th = styled.th`
  padding: 10px;
`;
const Td = styled.td`
  padding: 10px;
`;

// pagination
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  & > button {
    background-color: white;
    border: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      background-color: aliceblue;
    }
  }
`;
const JumpFirst = styled.button``;
const Prev = styled.button``;
const NumberButton = styled.button``;
const Next = styled.button``;
const JumpLast = styled.button``;
