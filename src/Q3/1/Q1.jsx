import { Mock } from '../mock/mock-data';

const Page1Q = () => {
    const mock = Mock;
    console.log(mock);
    return (
        <>
            <div>인기상품</div>
            <hr />
            <div>
                <ul>
                    <li>
                        <p>상품번호{mock[0].id}</p>
                        <p>상품이름{mock[0].name}</p>
                        <p>상품가격{mock[0].price}</p>
                    </li>
                    <li>
                        <p>상품번호{mock[1].id}</p>
                        <p>상품이름{mock[1].name}</p>
                        <p>상품가격{mock[1].price}</p>
                    </li>
                    <li>
                        <p>상품번호{mock[2].id}</p>
                        <p>상품이름{mock[2].name}</p>
                        <p>상품가격{mock[2].price}</p>
                    </li>
                    <li>
                        <p>상품번호{mock[3].id}</p>
                        <p>상품이름{mock[3].name}</p>
                        <p>상품가격{mock[3].price}</p>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Page1Q;
