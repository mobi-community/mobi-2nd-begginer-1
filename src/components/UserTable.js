import OneUser from "./OneUser";
import styled from "styled-components";

const UserTable = ({ userList }) => {
  return (
    <>
      <S.Table>
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
      </S.Table>
    </>
  );
};

export default UserTable;

const Table = styled.table`
  margin-top: 50px;

  tr {
    border: 1px solid grey;
    td {
      padding: 5px;
    }
  }
`;

const S = {
  Table,
};
