import styled from "styled-components";
import { UserList } from "../__mock__/user_list";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageMember = () => {
  /*
  totalPage = 4
  */
  const [users, setUsers] = useState(UserList());
  const [buttonArray, setButtonArray] = useState([0, 1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerUser, setPagePerUser] = useState(20);
  const totalPage = users.length / pagePerUser;
  const pageNationUserList = [];
  for (let i = 0; i < totalPage; i++) {
    pageNationUserList.push([users.slice(pagePerUser * i, pagePerUser * (i + 1))]);
  }
  const [pagePerUserList, setPagePerUserList] = useState(pageNationUserList[currentPage - 1]);
  // const navigate = useNavigate();

  // for (let i = 0; i <= totalPage.length; i++) {
  //   buttonArray.push(i);
  // }

  // "<<" 버튼 클릭
  const handleFirstPage = () => {
    setButtonArray([0, 1, 2, 3, 4]);
    setCurrentPage(1);
  };

  // ">>" 버튼 클릭
  const handleLastPage = () => {
    // totalPage = 2 -> [0,1] , totalPage = 3 -> [0,1,2]
    if (totalPage < 5) return setButtonArray([0, 1, 2, 3]);
    setButtonArray([totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1]);
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
    if (nextPage[nextPage.length - 1] > totalPage - 1) return [totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1];
    setButtonArray(nextPage);
  };

  const handlePage = (pageButton) => {
    setCurrentPage(pageButton + 1);
  };

  useEffect(() => {
    console.log(currentPage);
    setPagePerUserList(pageNationUserList[currentPage - 1]);
  }, [currentPage, pagePerUser]);

  return (
    <Container>
      <button onClick={() => setPagePerUser(20)}>20개씩</button>
      <button onClick={() => setPagePerUser(50)}>50개씩</button>
      {/* <select>
        <option value={20}>20명씩 보기</option>
        <option value={50}>50명씩 보기</option>
      </select> */}
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
