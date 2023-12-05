import styled from 'styled-components';

const Pagination = ({ totalUsers, usersPerPage, currentPage, setCurrentPage }) => {
    // 전체 게시물에 따라 필요한 페이지수 계산
    const numOfPages = Math.ceil(totalUsers / usersPerPage);
    // Array 인스턴스의 fill() 메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경. 그리고 수정된 배열을 반환
    // 일단 모두 null이 있는 배열을 반환한다. 다섯개의 인덱스가 들어갈 수 있음
    let totalButtons = new Array(numOfPages).fill(null);
    totalButtons = totalButtons.map((_, index) => index + 1);

    return (
        <>
            <S.Button type="button" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                &lt;&lt;
            </S.Button>
            {/* <S.Button type="button" onClick={() => setCurrentPage(currentPage - 1)}></S.Button> */}
            <S.Button type="button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
            </S.Button>
            {totalButtons.map((pageNumber) => (
                <S.Button
                    // 버튼이 판단할 정보줘야함.
                    isCurrent={pageNumber === currentPage}
                    // onClickPage = setCurrentPage pageNumber가 binding된다.
                    // url주소로 바꾸는 함수로 바껴야함.... setCurrentPage가 아니다...
                    onClick={() => setCurrentPage(pageNumber)}
                >
                    {pageNumber}
                </S.Button>
            ))}
            <S.Button type="button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === 10}>
                &gt;
            </S.Button>
            <S.Button type="button" onClick={() => setCurrentPage(10)} disabled={currentPage === 10}>
                &gt;&gt;
            </S.Button>
        </>
    );
};

export default Pagination;

const Button = styled.button`
    background-color: ${(props) => (props.isCurrent ? 'red' : 'white')};
    padding: 10px;
    margin: 3px;
`;

const S = {
    Button,
};

/**
 *
 * Button 을 어떻게 다섯개씩 보이게 할 것 인가..?
 * focus되는 버튼 숫자로만..가게하고싶은데..ㄴ
 * 뒤로가기 지원..?하하하
 * 
 * 링크를 써도되고!
 * set~~ 
 * 이동!
 * 링크를 쓰기!
 * onClickPage를 pagination을 왜요?
 * 
 */
