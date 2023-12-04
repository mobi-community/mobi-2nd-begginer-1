import { useEffect, useState } from "react";
import { UserList } from "../__mock__/user_list";
import styled from "styled-components";

const PageNation = (users, page, setPage, pageNationUserList, setPageNationUserList) => {
  // const [users, setUsers] = useState(UserList());
  const [buttonArray, setButtonArray] = useState([0, 1, 2, 3, 4]);
  // 현재 페이지 값
  const [currentPage, setCurrentPage] = useState(1);
  // 유저 목록의 페이지값(filter를 통해 페이지네이션 구현) => mock 데이터의 page값
  // const [page, setPage] = useState(1);
  // 페이지네이션이 적용된 유저 목록
  // const [pageNationUserList, setPageNationUserList] = useState(users.filter((el) => el.page === page));
  // 한 페이지 당 보여질 유저의 수
  const pagePerUser = 20;
  // 전체 페이지 수
  const totalPage = users.length / pagePerUser;

  // "<<" 버튼 클릭
  const handleFirstPage = () => {
    setButtonArray([0, 1, 2, 3, 4]);
    setCurrentPage(1);
    setPage(1);
  };

  // ">>" 버튼 클릭
  const handleLastPage = () => {
    setButtonArray([totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1]);
    setCurrentPage(totalPage);
    setPage(totalPage);
  };

  // "<" 버튼 클릭
  const handlePrev = () => {
    const prevPage = buttonArray.map((value) => {
      setCurrentPage(currentPage - 1);
      setPage(page - 1);
      if (currentPage <= 1) {
        setCurrentPage(1);
        setPage(currentPage);
      }
      return value - 1;
    });
    // 예외처리(페이지 값은 항상 0이상)
    // buttonArray의 0번째 인덱스가 0보다 작으면 "<" 버튼을 클릭해도 항상 buttonArray는 [0, 1, 2, 3, 4]
    if (prevPage[0] < 0) return [0, 1, 2, 3, 4];
    setButtonArray(prevPage);
  };

  // ">" 버튼 클릭
  const handleNext = () => {
    const nextPage = buttonArray.map((value) => {
      setCurrentPage(currentPage + 1);
      setPage(page + 1);
      if (currentPage >= totalPage) {
        setCurrentPage(totalPage);
        setPage(currentPage);
      }
      return value + 1;
    });
    // totalPage - 1 인 이유는 buttonArray의 값이 [1, 2, 3, 4, 5]가 아닌 [0, 1, 2, 3, 4]이기 때문
    if (nextPage[nextPage.length - 1] > totalPage - 1) return [totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1];

    setButtonArray(nextPage);
  };

  // buttonArray에 있는 숫자 클릭시 해당 페이지로 이동
  const handlePage = (pageButton) => {
    setCurrentPage(pageButton + 1);
    setPage(pageButton + 1);
  };

  // // page가 변경될때마다 유저 목록(users)에서 해당 page인 유저 목록을 필터링
  // useEffect(() => {
  //   setPageNationUserList(users.filter((el) => el.page === page));
  // }, [page]);

  console.log(page);
  return (
    <Wrapper>
      <JumpFirst onClick={handleFirstPage}>{"<<"}</JumpFirst>
      <Prev onClick={handlePrev}>{"<"}</Prev>
      {buttonArray.map((pageButton) => (
        <NumberButton
          onClick={() => handlePage(pageButton)}
          style={{
            backgroundColor: currentPage === pageButton + 1 ? "aliceblue" : "#fff",
          }}
        >
          {pageButton + 1}
        </NumberButton>
      ))}
      <Next onClick={handleNext}>{">"}</Next>
      <JumpLast onClick={handleLastPage}>{">>"}</JumpLast>
    </Wrapper>
  );
};

export default PageNation;

// pagination
const Wrapper = styled.div`
  /*   display: flex;
  flex-direction: row; */

  & > button {
    background-color: white;
    border: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      background-color: aliceblue;
    }
  }
`;
const JumpFirst = styled.button``;
const Prev = styled.button``;
const NumberButton = styled.button``;
const Next = styled.button``;
const JumpLast = styled.button``;
