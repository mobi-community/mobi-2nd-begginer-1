import { mock } from "../data/mock";
import Post from "./components/post";
import CommentList from "./components/comment";

const AfterDetailPage = () => {
  return (
    <div>
      {/*글쓴 유저 정보*/}
      <div>글쓴이</div>
      <div>{mock.user.userImg}</div>
      <img src={mock.user.userImg} alt="사진" />
      {/*포스트 정보*/}
      <Post mock={mock} />
      {/*댓글 리스트*/}
      <CommentList commentList={mock.commentList} />
    </div>
  );
};

export default AfterDetailPage;
