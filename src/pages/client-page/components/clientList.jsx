import { mockUserData } from '../../../__mock__/faker-data/index';
import { useEffect, useState } from 'react';
import Pagination from '../../../components/pagination';
import FilterPage from '../../../components/filter';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

// 고정! 데이터!

const ClientList = () => {
    const [totalUsers, setTotalUsers] = useState(mockUserData);
    console.log(`mock`, totalUsers);
    const columns = ['고유번호', '이름', '생년월일', '연락처', '마지막 로그인 시간'];

    const [usersPerPage, setUsersPerPage] = useState(20);
    // 현재 페이지 번호
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setOffset((currentPage - 1) * usersPerPage);
    }, [currentPage]);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page') || 1;
        setCurrentPage(page);
    }, []);
    // 문자형 타입만지원. "count" = key값
    // useParamㅇ으로 바꾸고 param이 없을경우에 1페이지로 바꾸면 새로고침 유지?
    /**
     * 버그 찾을때?
     * actual 실제 실행된 것과, expect 기대 값을 봐야함
     * currentPage가 나와야하는데 계속 1이나온다. 왜?
     * 그걸 어디서뿌려지? List!
     * List가서 1이 나올 껀덕지를 찾아봄...
     * 역추적.. 랜더링이 일어나는 순간
     */
    // 페이지의 첫 게시물의 위치를 담음 / user
    // {}: 객체에서 page라는 ㅇ이름을 가진ㄴ 애를 가져오겠다.

    return (
        <>
            <FilterPage
                totalUsers={totalUsers}
                setTotalUsers={setTotalUsers}
                usersPerPage={usersPerPage}
                setUsersPerPage={setUsersPerPage}
            />
            <Table>
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
            </Table>
            <Pagination
                totalUsers={totalUsers.length}
                usersPerPage={usersPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                limit={5}
            />
        </>
    );
};

export default ClientList;

const Table = styled.table`
    margin: 0 auto;
    padding: 40px 0px;
`;
