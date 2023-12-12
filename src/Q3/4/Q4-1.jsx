import { useState } from 'react';
import { styled } from 'styled-components';
import MapPage from './Q4-2';
import { Mock } from '../mock/mock-data';

const Page4Q = () => {
    const [content, setContent] = useState(Mock);
    const ProductMore = () => {
        alert('더보러가기~');
    };

    return (
        <>
            <div>
                <Title>인기상품</Title>
                <hr />
                <GridContent>
                    {content.map((list, idx) => (
                        <MapPage key={idx} list={list} />
                    ))}
                </GridContent>
                <MoreBtn onClick={ProductMore}>더 많은 상품 보기</MoreBtn>
            </div>
            <div>
                <Title>할인상품</Title>
                <hr />
                <GridContent>
                    {content.map((list, idx) => (
                        <MapPage key={idx} list={list} />
                    ))}
                </GridContent>
                <MoreBtn onClick={ProductMore}>더 많은 상품 보기</MoreBtn>
            </div>
            <div>
                <Title>신상품</Title>
                <hr />
                <GridContent>
                    {content.map((list, idx) => (
                        <MapPage key={idx} list={list} />
                    ))}
                </GridContent>
                <MoreBtn onClick={ProductMore}>더 많은 상품 보기</MoreBtn>
            </div>
        </>
    );
};
export default Page4Q;

const GridContent = styled.div`
    display: flex;
`;

const Title = styled.div`
    font-size: larger;
    font-weight: 800;
    width: 100%;
    line-height: 50px;
    text-align: left;
`;

const MoreBtn = styled.button`
    margin-top: 30px;
`;

/*
1. 재사용이 가능한 예시를 만들어보자.. 
   1-1 반복되는 로직이 있는 경우 
   => 보기에 많은 로직이 반복되며 재사용 컴포넌트로 만들수 있다
  //  1-2 변수나 함수의 명칭이 명확하지 않을 경우 
  //  => onClick 함수일 경우 앞에 on을 붙여주거나 더 명확한 명칭으로 하도록 
*/
