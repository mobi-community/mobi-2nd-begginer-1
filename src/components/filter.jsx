import { useState } from 'react';

const FilterPage = ({ totalUsers, setTotalUsers, usersPerPage, setUsersPerPage }) => {
    // console.log(totalUsers);
    const [sortBy, setSortBy] = useState('');

    const onChangeFilter = (e) => {
        const value = e.target.value;
        console.log('야', value); //나오구
        // 선택한 옵션에 따라 usersPerPage 상태를 설정합니다.
        if (value === '게시물보기' || value === '20개씩') {
            setUsersPerPage(20);
        } else if (value === '50개씩') {
            setUsersPerPage(50);
        }
    };

    //Session Storage ?localStorage?? 아 뭘랑...
    // setItem(key, value) – 키-값 쌍을 보관합니다.
    // getItem(key) – 키에 해당하는 값을 받아옵니다.
    // 이름순으로 클릭할때..a-z순으로...sort...a-b
    // 참조 : https://velog.io/@ksh4820/sort-localeCompare

    // 이름순
    const onClickNameFilter = () => {
        const sortedUsers = [...totalUsers].sort((a, b) => (a.nickName < b.nickName ? -1 : 1));

        setTotalUsers(sortedUsers);
    };
    // 생일순
    const onClickBirthFilter = () => {
        const sortedUsers = [...totalUsers].sort((a, b) => (a.birth < b.birth ? -1 : 1));
        setTotalUsers(sortedUsers);
    };
    //로그인순
    const onClickLoginFilter = () => {
        const sortedUsers = [...totalUsers].sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
        setTotalUsers(sortedUsers);
    };
    return (
        <>
            <div>
                <select onChange={onChangeFilter}>
                    <option>게시물보기</option>
                    <option>20개씩</option>
                    <option>50개씩</option>
                </select>
                <span>
                    <button onClick={onClickNameFilter}>이름</button>
                    <button onClick={onClickBirthFilter}>생년월일</button>
                    <button onClick={onClickLoginFilter}>로그인</button>
                </span>
            </div>
        </>
    );
};
export default FilterPage;
