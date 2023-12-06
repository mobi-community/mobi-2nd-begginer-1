const CommentList = ({ commentList }) => {
  return commentList.map((el) => {
    const { commentId, user, commentContent } = el;
    return (
      <div key={commentId}>
        <p>{user.commentUserId}</p>
        <img src={user.commentUserImg} alt="유저 프로필" />
        <p>{commentContent}</p>
      </div>
    );
  });
};

export default CommentList;
