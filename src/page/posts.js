import styled from "styled-components";

const Posts = ({info}) =>{
    return <Table>
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
      {info.map((list)=>(<tr>
          <Td>{list.id}</Td>
          <Td>{list.name}</Td>
          <Td>{list.birth}</Td>
          <Td>{list.phone}</Td>
          <Td>{list.lastestlogin}</Td>
        </tr>))}
        
    </tbody>
  </Table>

}

export default Posts;

const Table = styled.table`
`;

const Th = styled.th`
`;
const Td = styled.td`
`;