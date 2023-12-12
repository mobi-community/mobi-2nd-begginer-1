import { useState } from 'react';
import OneUser from './oneUser';
import { users } from '../mock/users';


const Page3Q = () => {
    const [mockdata, setMockdata] = useState(users);
    const [isEditbox, setIsEditbox] = useState(false);
    //   console.log(mockdata);
    const onSubmitAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const nickName = e.target.nickName.value;
        const age = e.target.age.value;
        // console.log(nickName, age);
        // 값은 가져와지고 이제 추가를 누르면 기존의 값을 복사하고 그뒤에 추가할 객체를 붙여..
        const newaddlist = {
            id: Math.floor(Math.random() * 10000),
            name,
            nickName,
            age,
        };
        setMockdata([...mockdata, newaddlist]);
    };
    return (
        <>
            <>
                <form onSubmit={onSubmitAdd}>
                    <input name="name" />
                    <input name="nickName" />
                    <input name="age" />
                    <button>추가</button>
                </form>
                {mockdata.map((list, index) => (
                    <OneUser
                        key={index}
                        list={list}
                        mockdata={mockdata}
                        setMockdata={setMockdata}
                        isEditbox={isEditbox}
                        setIsEditbox={setIsEditbox}
                    />
                ))}
            </>
        </>
    );
};
export default Page3Q;
/*
불필요한 상태 (부모까지 같이 랜더링이 되지 않아도 될텐데 좋지 않은경우) 전체가 랜더링 되도록.. 
부모 컴포넌트에서 상태를 만들고 
프롭스로 전달해주면 ? 
전체가 랜더링이 되니까 ... 상태가 최적화 되지 않는 상태가 된다...
*/
