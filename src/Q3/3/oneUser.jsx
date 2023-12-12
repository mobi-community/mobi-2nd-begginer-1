import { useRef, useState } from 'react';

const OneUser = ({ list, mockdata, setMockdata, isEditbox, setIsEditbox }) => {
    const editRef = useRef(null);

    //삭제
    const onClickDelete = () => {
        const deleteItem = mockdata.filter((item) => item.id !== list.id);
        setMockdata(deleteItem);
    };

    //수정클릭하면 기존의 div가 input 바뀌는..

    const onClickEdit = () => {
        if (!isEditbox) return setIsEditbox(true);

        const _mockdata = [...mockdata]; //주소값 생성을 위한 복사 //중처객체도 딥카피

        const editItem = _mockdata.find((item) => item.id === list.id); //객체 찾기
        editItem.nickName = editRef.current.value;
        console.log(editItem.nickName);
        setMockdata(_mockdata);
        setIsEditbox(false);
    };

    return (
        <>
            <div>name : {list.name}</div>

            {isEditbox ? (
                <input ref={editRef} defaultValue={list.nickName}></input>
            ) : (
                <div>nickName : {list.nickName}</div>
            )}

            <div>age : {list.age}</div>
            <button onClick={onClickEdit}>수정</button>
            <button onClick={onClickDelete}>삭제</button>
            <hr />
        </>
    );
};
export default OneUser;
