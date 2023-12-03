import styled from "styled-components";
import { UserList } from "../__mock__/user_list";
import { useState } from "react";

const ManageMember = () => {
  const totalPage = 10;
  const [users, setUsers] = useState(UserList());
  const [buttonArray, setButtonArray] = useState([0, 1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showUserList, setShowUserList] = useState();

  const handleFirstPage = () => {
    setButtonArray([0, 1, 2, 3, 4]);
    setCurrentPage(1);
  };
  const handleLastPage = () => {
    setButtonArray([5, 6, 7, 8, 9]);
    setCurrentPage(10);
  };

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

  const handleNext = () => {
    const nextPage = buttonArray.map((value) => {
      setCurrentPage(currentPage + 1);
      if (currentPage >= 10) {
        setCurrentPage(10);
      }
      return value + 1;
    });
    if (nextPage[nextPage.length - 1] > 9) return [5, 6, 7, 8, 9];
    setButtonArray(nextPage);
  };

  const handlePage = (pageButton) => {
    setCurrentPage(pageButton + 1);
  };

  console.log(users);

  return (
    <Container>
      <table>
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
          {users.map((user) => (
            <tr>
              <div>{user.page}페이지</div>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.birthday}</Td>
              <Td>{user.number}</Td>
              <Td>{user.createdAt}</Td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination>
        <JumpFirst onClick={handleFirstPage}>{"<<"}</JumpFirst>
        <Prev onClick={handlePrev}>{"<"}</Prev>
        {buttonArray.map((pageButton) => (
          <NumberButton
            onClick={() => handlePage(pageButton)}
            style={{
              backgroundColor: currentPage === pageButton + 1 ? "aliceblue" : "#fff",
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

export default ManageMember;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
// member table
const Th = styled.th`
  padding: 10px;
`;
const Td = styled.td`
  padding: 10px;
`;

// pagination
const Pagination = styled.div`
  /*   display: flex;
  flex-direction: row; */

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
