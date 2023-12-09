import OneUser from "./OneUser";
import styled from "styled-components";

const UserTable = ({ userList }) => {
  return (
    <S.Table>
      <S.Tr>
        <S.Td>아이디</S.Td>
        <S.Td>이름</S.Td>
        <S.Td>생년월일</S.Td>
        <S.Td>핸드폰 번호</S.Td>
        <S.Td>마지막 로그인 날짜</S.Td>
      </S.Tr>
      {userList.map((user, index) => {
        return <OneUser key={user.id} user={user} />;
      })}
    </S.Table>
  );
};

export default UserTable;

const Table = styled.table`
  margin-top: 10px;

  tr {
    border: 1px solid grey;
    td {
      padding: 5px;
    }
  }
`;

const Tr = styled.tr`
  background-color: rgb(200, 200, 200);
`;

const Td = styled.td`
  font-weight: 900;
`;

const S = {
  Table,
  Tr,
  Td,
};
