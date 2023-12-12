// (3) 상태를 최적화 해야할 때 - 컴포넌트의 상태 관리를 효율적으로 하기 위해 컴포넌트를 분리합니다.
import { useState } from "react";
import { data3 } from "./mock/data3";

const StateComponent = () =>{
    
    const MockData = data3
    const copyData = [...MockData]

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const onChangeTitle = (e) =>{
        setTitle(e.target.value);
    };   

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    };
    
    const onSubmit = (e) => {
            e.preventDefault();
            copyData.push({title, content})
          };

    return <form onSubmit={onSubmit}>
        <div>제목<input name="title" onChange={onChangeTitle}> </input></div>
        <div>내용<input name="content"onChange={onChangeContent}> </input></div>
        <button>작성하기</button>
    </form>

}

export default StateComponent;
