// **[3] 페이지 네이션 만들기**
// - 하나의 페이지당 총 20개의 유저 목록이 보여져야하며 이는 5개 단위의 페이지 네이션으로 보여져야 합니다. 마지막 페이지는 [10]입니다.

// **ex)**
// - **<< < [1] [2] [3] [4] [5] > >>**

// - 페이지 번호는 뒤로가기가 지원되어야하며 선택된 페이지에는 포커스가 이루져야합니다.
import { useState } from "react";
import styled from "styled-components";


const Pagination = ({totalPosts, limit, page, setPage}) => {
    const numPages = Math.ceil(totalPosts / limit);
    const [currPage, setCurrPage] = useState(page);
    let firstNum = currPage - (currPage % 5) + 1;

    return (
        <PageSection>
            <ButtonWrap>
                 <Button 
                    onClick={() => {setPage(page-1); setCurrPage(page-2);}} 
                    disabled={page===1}>
                    &lt;
                </Button>
                {numPages >= 5 ? Array(5).fill().map((_, i) =>{
                            return (
                                <Button
                                    key={i+1} 
                                    onClick={() => {setPage(firstNum+i)}}
                                    style={{color:page === firstNum+i &&  "white", backgroundColor: page === firstNum+i && "burlywood"}}>
                                    {firstNum+i}
                                </Button>
                            )
                }):Array(numPages).fill().map((_, i) =>{
                    return (
                        <Button
                            key={i+1} 
                            onClick={() => {setPage(firstNum+i)}}
                            style={{color:page === firstNum+i &&  "white", backgroundColor: page === firstNum+i && "burlywood"}}>
                            {firstNum+i}
                        </Button>
                    )
                })}
                
                 <Button 
                    onClick={() => {setPage(page+1); setCurrPage(page);}} 
                    disabled={page===numPages}>
                    &gt;
                </Button>
            </ButtonWrap>
        </PageSection>
    )

}

export default Pagination;

const PageSection = styled.div`
`;

const ButtonWrap = styled.div`
`;

const Button = styled.button`
    
`;

