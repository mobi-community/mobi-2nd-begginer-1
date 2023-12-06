import { useState } from "react";
import { userList } from "../user-list/user-list";
import Posts from "./components/posts";
import Pagination from "./components/pagination";


const Admin = () => {
  const List = userList;

  const [page, setPage] = useState(1); // 페이지
  const limit = 20; // posts가 보일 최대 갯수
  const offset = (page-1)*limit;// 시작점과 끝점 구하는 offset

  const postData = (posts) => {
    if(posts){
      let result = posts.slice(offset, offset + limit)
      return result
    }
  }


  return (
    <>   
    <Posts info={postData(List)}/>
    <Pagination totalPosts={List.length} limit={limit} page={page} setPage={setPage}></Pagination>
    </>
  );
};

export default Admin;
