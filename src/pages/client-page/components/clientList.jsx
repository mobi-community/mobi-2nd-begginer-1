import styled from 'styled-components';
import { MockUsersData } from '../../../__mock__/faker-data';

const ClientList = () => {
    const mock = MockUsersData(10);
    console.log(`mock`, mock);
    const columns = ['고유번호', '이름', '생년월일', '연락처', '마지막 로그인 시간'];

    return (
        <S.Wrapper>
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
                    {mock.map(({ id, nickName, birth, phoneNumber, createdAt }) => (
                        <tr key={id + nickName + birth}>
                            <td>{id}</td>
                            <td>{nickName}</td>
                            <td>{JSON.stringify(birth)}</td>
                            <td>{phoneNumber}</td>
                            <td>{JSON.stringify(createdAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </S.Wrapper>
    );
};

export default ClientList;

const Wrapper = styled.div``;

const S = {
    Wrapper,
};
