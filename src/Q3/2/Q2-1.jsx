import { useNavigate } from 'react-router-dom';

const Page2Q = () => {
    const navigate = useNavigate();
    const onSubmitLogin = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        // console.log(id, name, password);
        alert('Hello!');
    };
    const onNextPage = () => {
        navigate('/2-2');
    };

    return (
        <>
            <h1>LOGO</h1>
            <p>회원가입</p>
            <form onSubmit={onSubmitLogin}>
                <input name="id" placeholder="ID" />
                <br />
                <input name="name" placeholder="NAME" />
                <br />
                <input name="password" placeholder="PASSWORD" />
                <br />
                <button>Join</button>
            </form>
            <button onClick={onNextPage}>Next</button>
        </>
    );
};
export default Page2Q;
/*
관심사 분리
훅스로 ..... 쓸 수 있게 
useInput 은 왜 쓴거야 => e.target.value가 반복되니까!
저 부분을 useInput으로 만들면!
*/
