import { useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../style/common";

const Pagination = ({ totalLength, pagesPerGroup }) => {
  //useSearchParams => 쿼리스트링 추출 {page : 12 }
  const [searchParams, setSearchParams] = useSearchParams();

  const perPage = Number(searchParams.get("perPage")) || 20;
  const page = Number(searchParams.get("page")) || 1;
  const totalPage = totalLength / perPage;

  const [currentPage, setCurrentPage] = useState(page);

  //처음 페이지 이동 함수
  const onMoveStartPage = () => {
    setCurrentPage(1);
  };

  //마지막 페이지 이동 함수
  const onMoveLastPage = () => {
    setCurrentPage(totalPage);
  };

  //뒤로 가기 함수
  const onMoveNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //앞으로 가기 함수
  const onMovePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //페이지 그룹을 바꿔주는 함수 => 현재 페이지가 바뀔 때마다 실행
  useEffect(() => {
    const newCurrentGroup = Math.ceil(currentPage / pagesPerGroup);
    searchParams.set("page", currentPage);
    setSearchParams(searchParams);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  //해당 페이지로 이동하는 함수
  const onMoveTargetPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Buttons = Array(pagesPerGroup) //5
    .fill()
    .map((_, idx) => {
      const currentGroup = Math.ceil(currentPage / 5);
      const pageNumber = (currentGroup - 1) * pagesPerGroup + idx + 1;
      // data가 없으면 얼리 리턴으로 버튼 생성 X
      if (totalLength > perPage * idx) return pageNumber;
    });

  return (
    <S.Wrapper>
      <S.Button onClick={onMoveStartPage}>≪</S.Button>
      <S.Button onClick={onMovePrevPage}>＜</S.Button>
      {/*버튼들 현재 그룹 => 해당 버튼들만 보여주기*/}
      {Buttons.map((pageNumber) => {
        if (!pageNumber) return;
        return (
          <S.Button
            onClick={() => {
              onMoveTargetPage(pageNumber);
            }}
            isFocus={pageNumber === page}
          >
            {pageNumber}
          </S.Button>
        );
      })}
      <S.Button onClick={onMoveNextPage}>＞</S.Button>
      <S.Button onClick={onMoveLastPage}>≫</S.Button>
    </S.Wrapper>
  );
};
export default Pagination;

const Wrapper = styled.div`
  width: 500px;
  height: 100px;
  ${flexCenter}
`;

const Button = styled.button`
  background-color: ${({ isFocus, theme }) =>
    isFocus ? theme.COLORS.light_grey : "white"};
  color: ${({ isFocus }) => (isFocus ? "white" : "black")};
  width: 30px;
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 50%;
  cursor: pointer;
`;

export const S = {
  Wrapper,
  Button,
};
