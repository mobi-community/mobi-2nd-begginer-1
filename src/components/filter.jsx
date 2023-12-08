const FilterPage = ({ totalUsers, setTotalUsers, usersPerPage, setUsersPerPage }) => {
    // console.log(totalUsers);

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

    // 필터링
    const onChangeUserFilter = (e) => {
        const value = e.target.value;
        if (value === '이름') {
            const sortedUsers = [...totalUsers].sort((a, b) => (a.nickName < b.nickName ? -1 : 1));
            setTotalUsers(sortedUsers); // 이름순
        }
        if (value === '생년월일') {
            const sortedUsers = [...totalUsers].sort((a, b) => (a.birth < b.birth ? -1 : 1));
            setTotalUsers(sortedUsers); // 생일순
        }
        if (value === '로그인') {
            const sortedUsers = [...totalUsers].sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
            setTotalUsers(sortedUsers); //로그인순
        }
    };
    // 오름차순 내림차순 필터
    const onChangeSortFilter = (e) => {
        const value = e.target.value;
        if (value === '오름차순') {
            const sortedUsers = [...totalUsers].sort((a, b) =>
                a.nickName < b.nickName ? -1 : 1 && a.birth < b.birth ? -1 : 1 && a.createdAt < b.createdAt ? -1 : 1
            );
            setTotalUsers(sortedUsers); // 이름순
        }

        //
        if (value === '내림차순') {
            const sortedUsers = [...totalUsers].sort((a, b) =>
                a.nickName > b.nickName ? -1 : 1 && a.birth > b.birth ? -1 : 1 && a.createdAt > b.createdAt ? -1 : 1
            );
            setTotalUsers(sortedUsers);
        }
        // 이거는 인터넷에서 구글링해서 알아낸 방법이며,, 이해를 못해서 아직 쓰질 못하게따..
        // if (value === "오름차순" || value === "내림차순") {
        //   const sortOrder = value === "오름차순" ? 1 : -1;

        //   const sortedUsers = [...totalUsers].sort((a, b) => {
        //     if (a.nickName < b.nickName) return -1 * sortOrder;
        //     if (a.nickName > b.nickName) return 1 * sortOrder;

        //     // nickName이 동일한 경우, 다른 속성으로 비교
        //     if (a.birth < b.birth) return -1 * sortOrder;
        //     if (a.birth > b.birth) return 1 * sortOrder;

        //     if (a.createdAt < b.createdAt) return -1 * sortOrder;
        //     if (a.createdAt > b.createdAt) return 1 * sortOrder;

        //     // 모든 속성이 동일한 경우, 정렬하지 않음
        //     return 0;
        //   });

        //   setTotalUsers(sortedUsers);
        // }
    };

    return (
        <>
            <div>
                <select onChange={onChangeFilter}>
                    <option>게시물보기</option>
                    <option>20개씩</option>
                    <option>50개씩</option>
                </select>
                <select onChange={onChangeUserFilter}>
                    <option>이름</option>
                    <option>생년월일</option>
                    <option>로그인</option>
                </select>
                <select onChange={onChangeSortFilter}>
                    <option>오름차순</option>
                    <option>내림차순</option>
                </select>
            </div>
        </>
    );
};
export default FilterPage;
/**
 * 지금 상태: 클릭하면 해당 게시물들이 오름차순으로 나옴
 * 목표 상태: 클릭하면 오름차순 게시물이고 다시 클릭하면 내림차순으로
 * 그럼 일단 보여지는 상태도 : 이름(오름차순) 클릭했을때 : 이름(내림차순)
 * 아니 잠만 이러면 코드가 너무 길어지눈데 .. 생각하자 생각..

 **/
