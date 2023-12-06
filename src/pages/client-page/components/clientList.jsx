import styled from 'styled-components';
import { MockUsersData } from '../../../__mock__/faker-data';
import { useState } from 'react';
import Pagination from '../../../components/pagination';
import FilterPage from '../../../components/filter';

const ClientList = () => {
    const totalUsers = MockUsersData(200);
    console.log(`mock`, totalUsers);
    const columns = ['고유번호', '이름', '생년월일', '연락처', '마지막 로그인 시간'];

    const [usersPerPage, setUsersPerPage] = useState(20);
    // 현재 페이지 번호
    const [currentPage, setCurrentPage] = useState(1);
    // 문자형 타입만지원. "count" = key값
    console.log(`currentPage`, currentPage);
    // 페이지의 첫 게시물의 위치를 담음 / user
    const offset = (currentPage - 1) * usersPerPage;
    // {}: 객체에서 page라는 ㅇ이름을 가진ㄴ 애를 가져오겠다.

    return (
        <S.Wrapper>
            <FilterPage totalUsers={totalUsers} usersPerPage={usersPerPage} setUsersPerPage={setUsersPerPage} />
            <table>
                {/* 테이블 헤더 */}
                <thead>
                    {/* 행 */}
                    <tr>
                        {columns.map((column) => (
                            // th: 열
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {totalUsers
                        .slice(offset, offset + usersPerPage)
                        .map(({ id, nickName, birth, phoneNumber, createdAt }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{nickName}</td>
                                <td>{JSON.stringify(birth)}</td>
                                <td>{phoneNumber}</td>
                                <td>{JSON.stringify(createdAt)}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Pagination
                totalUsers={totalUsers.length}
                usersPerPage={usersPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                limit={5}
            />
        </S.Wrapper>
    );
};

export default ClientList;

const Wrapper = styled.div``;

const S = {
    Wrapper,
};
