const MapPage = ({ list }) => {
    const ProductDetail = () => {
        alert('뿅!');
    };

    return (
        <div>
            <img src="public/Jake.webp" />

            <p>상품 번호: {list.id}</p>
            <p>상품 이름: {list.name}</p>
            <p>상품 가격:{list.price}</p>
            <button onClick={ProductDetail}>상품보기</button>
        </div>
    );
};
export default MapPage;
