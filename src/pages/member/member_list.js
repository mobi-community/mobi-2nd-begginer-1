import styled from "styled-components";
import { UserList } from "../../__mock__/user_list";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagiNation from "../../components/pagination";
import Filter from "../../components/filter";

const MemberList = () => {
  const [users, setUsers] = useState(UserList());
  const [buttonArray, setButtonArray] = useState([0, 1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(20);
  const totalPage = Math.ceil(users.length / userPerPage);
  const pageNationUserList = [];
  for (let i = 0; i < totalPage; i++) {
    pageNationUserList.push([users.slice(userPerPage * i, userPerPage * (i + 1))]);
  }
  const [userListPerPage, setUserListPerPage] = useState(pageNationUserList[currentPage - 1]);

  return (
    <Container>
      <Filter users={users} setUsers={setUsers} setUserPerPage={setUserPerPage} setButtonArray={setButtonArray} setCurrentPage={setCurrentPage} />
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
          {userListPerPage[0].map((user) => (
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
      <PagiNation
        users={users}
        buttonArray={buttonArray}
        setButtonArray={setButtonArray}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userPerPage={userPerPage}
        setUserPerPage={setUserPerPage}
        totalPage={totalPage}
        pageNationUserList={pageNationUserList}
        setUserListPerPage={setUserListPerPage}
      />
    </Container>
  );
};

export default MemberList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
