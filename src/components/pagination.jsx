import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Pagination = ({ totalUsers, usersPerPage, currentPage, setCurrentPage, limit }) => {
    // 전체 게시물에 따라 필요한 페이지수 계산
    const numOfPages = Math.ceil(totalUsers / usersPerPage);

    // Array 인스턴스의 fill() 메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경. 그리고 수정된 배열을 반환
    // 일단 모두 null이 있는 배열을 반환한다. 다섯개의 인덱스가 들어갈 수 있음
    let totalButtons = new Array(numOfPages).fill(null);
    totalButtons = totalButtons.map((_, index) => index + 1);

    console.log('currentPage>>', currentPage);

    const navigate = useNavigate();

    /*
        버튼색 유지하기!
        useEffect?
     */

    const onGoStartPage = () => {
        setCurrentPage(1);
        navigate(`/?page=1`);
    };

    const onGoPrevPage = () => {
        setCurrentPage(currentPage - 1);
        navigate(`/?page=${currentPage - 1}`);
    };

    const onGoNextPage = () => {
        setCurrentPage(currentPage + 1);
        navigate(`/?page=${currentPage + 1}`);
    };

    const onGoLastPage = () => {
        setCurrentPage(10);
        navigate(`/?page=10`);
    };

    const onSetPageNumber = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/?page=${pageNumber}`);
    };
    return (
        <>
            <Button type="button" onClick={onGoStartPage} disabled={currentPage === 1}>
                &lt;&lt;
            </Button>
            <Button type="button" onClick={onGoPrevPage} disabled={currentPage === 1}>
                &lt;
            </Button>
            {totalButtons.map((pageNumber) => (
                <Button
                    // 버튼이 판단할 정보줘야함.
                    isActive={pageNumber === currentPage}
                    // url주소로 바꾸는 함수로 바껴야함.... setCurrentPage가 아니다...
                    onClick={() => onSetPageNumber(pageNumber)}
                    // js == / === 형변환.....ㅋ === 하기전에 형일치를 다 시켜주기 number string string=>숫자로
                    className={pageNumber === Number(currentPage) ? 'active' : ''}
                >
                    {pageNumber}
                </Button>
            ))}
            <Button type="button" onClick={onGoNextPage} disabled={currentPage === 10}>
                &gt;
            </Button>
            <Button type="button" onClick={onGoLastPage} disabled={currentPage === 10}>
                &gt;&gt;
            </Button>
        </>
    );
};

export default Pagination;

const Button = styled.button`
    background: #d9d9d971;
    padding: 10px;
    margin: 3px;
    cursor: pointer;
    &:hover {
        border-color: #a6faff;
    }
    &:active,
    &.active {
        background: #a6faff;
    }
`;

/**
 *
 * Button 을 어떻게 다섯개씩 보이게 할 것 인가..?
 *
 */
