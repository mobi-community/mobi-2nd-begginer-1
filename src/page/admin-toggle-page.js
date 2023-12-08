// [4] **필터링 옵션 만들기**

// - 20개씩 보기, 50개씩 보기
// - 이름 순, 마지막 로그인 순, 생년월일 순으로 정렬하기
// - 오름차순 내림차순 정렬하기

// 단, 모든 조건의 필터링은 반드시 모두 뒤로가기가 지원 되어야합니다.

// **ex)**

// **20개씩 → 50개씩 보기, 이름순, 오름차순 → 내림차순(뒤로가기) →  50개씩 보기, 이름순, 오름차순**



import { useState } from "react";
import { userList } from "../user-list/user-list";
import Posts from "./components/posts";
import Pagination from "./components/pagination";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Admin = () => {

  // let history = useHistory();
  const [searchParams, setSearchParams] = useSearchParams();

  const [List,setList] = useState(userList);

  const [page, setPage] = useState(1); // 페이지
  const [limit, setLimit] = useState(20); // posts가 보일 최대 갯수
  const offset = (page-1)*limit;// 시작점과 끝점 구하는 offset
  const [option, setOption] = useState();

  const postData = (posts) => {
    if(posts){
      let result = posts.slice(offset, offset + limit)
      return result
    }
  }

  const onShowTwentyList =() =>{
    setLimit(20)
  }

  const onShowFiftyList =() =>{
    setLimit(50)
  }

 const onChangeSelected = (e)=>{
  if(e.target.value === "이름"){
    let copy = [...List]
    copy.sort((a,b)=> a.name > b.name ? 1 : -1)
    setList(copy)
    setOption(e.target.value)
  } else if(e.target.value === "마지막 로그인"){
    let copy = [...List]
    copy.sort((a, b) => (new Date(a.lastestlogin) - new Date(b.lastestlogin)));
    setList(copy)
    setOption(e.target.value)
  } else if(e.target.value === "생년월일"){
    let copy = [...List]
    copy.sort((a, b) => (new Date(a.birth) - new Date(b.birth)));
    setList(copy)
    setOption(e.target.value)
  }
    searchParams.set(e.target.value, e.target.value)
    setSearchParams(searchParams)
    const id = searchParams.get(e.target.value);
    console.log(id)
 }


 
 const onChangeAscending = (e)=> {
  if(e.target.value === "오름차순"){
    if(!option){
      let copy = [...List]
      copy.sort((a,b)=> a.id > b.id ? 1 : -1)
      setList(copy)
    }
    else if(option === "이름"){
      let copy = [...List]
      copy.sort((a,b)=> a.name > b.name ? 1 : -1)
      setList(copy)
    } else if(option === "마지막 로그인"){
      let copy = [...List]
      copy.sort((a, b) => (new Date(a.lastestlogin) - new Date(b.lastestlogin)));
      setList(copy)
    } else if(option === "생년월일"){
      let copy = [...List]
      copy.sort((a, b) => (new Date(a.birth) - new Date(b.birth)));
      setList(copy)
    }
   }
  else if(e.target.value === "내림차순"){
    if(!option){
      let copy = [...List]
      copy.sort((a,b)=> b.id > a.id ? 1 : -1)
      setList(copy)
    }
    else if(option === "이름"){
      let copy = [...List]
      copy.sort((a,b)=> b.name > a.name ? 1 : -1)
      setList(copy)
    } else if(option === "마지막 로그인"){
      let copy = [...List]
      copy.sort((a, b) => (new Date(b.lastestlogin) - new Date(a.lastestlogin)));
      setList(copy)
    } else if(option === "생년월일"){
      let copy = [...List]
      copy.sort((a, b) => (new Date(b.birth) - new Date(a.birth)));
      setList(copy)
    }
   }
 }

 const test = new Date()
 console.log(test)

  return (
    <Wrapper>
      <Content>   
    <button onClick={onShowTwentyList}>20개</button>
    <button onClick={onShowFiftyList}>50개</button>
    <select onChange={onChangeSelected}>
      <option>이름</option>
      <option>마지막 로그인</option>
      <option>생년월일</option>
    </select>
    <select onChange={onChangeAscending}>
      <option>오름차순</option>
      <option>내림차순</option>
    </select>
    <Posts info={postData(List)}/>
    <Pagination totalPosts={List.length} limit={limit} page={page} setPage={setPage}></Pagination>
    </Content>
    </Wrapper>
  );
};

export default Admin;

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
`;
const Content = styled.div`
  margin-top:100px;
`;