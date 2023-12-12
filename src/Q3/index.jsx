import { useNavigate } from 'react-router-dom';

const TotalPage = () => {
    const navigate = useNavigate();
    const onClick가독성 = () => {
        navigate('/1');
    };
    const onClick관심사 = () => {
        navigate('/2');
    };
    const onClick최적화 = () => {
        navigate('/3');
    };

    const onClick재사용 = () => {
        navigate('/4');
    };
    return (
        <>
            <button onClick={onClick가독성}>1.가독성</button>
            <button onClick={onClick관심사}>2.관심사</button>
            <button onClick={onClick최적화}>3.최적화</button>
            <button onClick={onClick재사용}>4.재사용</button>
        </>
    );
};
export default TotalPage;
