import styled from 'styled-components';

const Pagination = ({ totalUsers, usersPerPage, currentPage, onClickPage }) => {
    // 전체 게시물에 따라 필요한 페이지수 계산
    const numOfPages = Math.ceil(totalUsers / usersPerPage);
    console.log(numOfPages); //5
    // Array 인스턴스의 fill() 메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경. 그리고 수정된 배열을 반환
    // 일단 모두 null이 있는 배열을 반환한다. 다섯개의 인덱스가 들어갈 수 있음
    let totalButtons = new Array(numOfPages).fill(null);
    console.log(totalButtons);
    totalButtons = totalButtons.map((_, index) => index + 1);
    // [1,2,3,4,5]
    console.log(totalButtons);

    return (
        <>
            {totalButtons.map((pageNumber) => (
                <S.Button>{pageNumber}</S.Button>
            ))}
        </>
    );
};

export default Pagination;

const Button = styled.button`
    padding: 10px;
`;

const S = {
    Button,
};
