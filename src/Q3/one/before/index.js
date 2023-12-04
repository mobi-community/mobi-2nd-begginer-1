import { mock } from "../data/mock";

//제목, 글, 댓글, 좋아요
const DetailPage = () => {
  return (
    <div>
      {/*글쓴 유저 정보*/}
      <div>글쓴이</div>
      <div>{mock.user.userImg}</div>
      <img src={mock.user.userImg} alt="사진" />
      {/*포스트 정보*/}
      <img src={mock.postImg} alt="사진" />
      <h1>{mock.title}</h1>
      <p>{mock.content}</p>
      <div>{mock.heartNum}</div>
      <div>{mock.commentNum}</div>
      {/*댓글 리스트*/}
      {mock.commentList.map((el) => (
        <div key={el.commentId}>
          <p>{el.user.commentUserId}</p>
          <img src={el.user.commentUserImg} alt="유저 프로필" />
          <p>{el.commentContent}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
